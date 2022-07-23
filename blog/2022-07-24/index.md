---
slug: 7月24日内容汇总
title: 7月24日内容汇总
authors: [garfield]
tags: []
---

📒 NestJS v9 发布

> https://trilon.io/blog/nestjs-9-is-now-available

📒 开发小技巧

Antd 的 Modal 既可以通过组件方式，也可以通过 modal method 方式使用，后者比组件更方便，不需要自己维护状态，但是会有一个问题，如果需要通过弹框内部的按钮，控制弹框更新、关闭，我们没办法直接给弹框内部的元素传递 `modal.update`，因为此时 `Modal.success()` 还没有执行结束，`modal` 是 `undefined`，如何解决呢？

实际上可以通过不可变引用解决这个问题，我们先定义一个对象 `ctx`，在里面定义一个 `update` 方法，但什么也不做。然后给弹框内部按钮传入 `(e) => ctx.update(e)`，这样是可以正常调用，不会报错。然后在 `Modal.success()` 执行完成之后，这个时候就可以访问 `modal` 对象了，我们用 `modal.update` 去替换之前的空函数，这样当事件触发之后，调用的 `modal.update()` 就可以控制弹框更新了。

```ts
const renderQuizModal = ({
  quizId,
  unitId,
  handleOk,
}) => {
  const ctx = {
    update: (e: CheckboxChangeEvent) => {},
  };
  
  const modal = Modal.success({
    title: quizName,
    width: 600,
    okButtonProps: {
      disabled: true,
    },
    content: (
      <Checkbox onChange={(e: CheckboxChangeEvent) => ctx.update(e)}>
        勾选此项
      </Checkbox>
    ),
    onOk: () => {
      handleOk?.();
    },
  })
  
  ctx.update = (e: CheckboxChangeEvent) =>
    modal.update({
      okButtonProps: {
        disabled: !e.target.checked,
      },
    });
}
```

如何强制重新挂载组件？如果修改 `props` 或者 `setState` 只是触发组件 rerender，实际上是组件更新的过程，有时候需要强制组件重新挂载，可以修改组件的 `key`。

为何有时候没有给域名配置 host 还是可以访问？这是因为在容器中部署，可以通过 Docker 的 Networking 实现容器通信。

⭐️ [「React进阶」React中没有keepalive？没事！手把手教你从零到一设计并实现一个！](https://juejin.cn/post/7122617883837857806)

⭐️ [现在前端面试都问什么「字节、蚂蚁、美团、滴滴面试小记」](https://mp.weixin.qq.com/s/MNw8SBvQLJ7WtNPROEL9og)

📒 [2022 年值得推荐的 Vue 库](https://mp.weixin.qq.com/s/aXsmf95WsB31r5PnOZEF9A)

📒 [【第2676期】一个 Safari 的小 Bug，探索出了 fetch 和 xhr的新玩法](https://mp.weixin.qq.com/s/jqRxNAI5C2NdxVX-pthFpg)

📒 [Vite 也可以模块联邦](https://juejin.cn/post/7122114817581645832)

📒 [开发一个 CLI 模板库可以点亮哪些技能点](https://juejin.cn/post/7121929203032784910)

📒 Golang 实现一个 JS 打包器

Golang 解析 JS AST：

- https://github.com/robertkrimen/otto
- https://pkg.go.dev/github.com/robertkrimen/otto/parser

Webpack 打包原理：

- [手写webpack核心原理，再也不怕面试官问我webpack原理](https://juejin.cn/post/6854573217336541192)
- [做了一夜动画，让大家十分钟搞懂Webpack](https://juejin.cn/post/6961961165656326152)

📒 [天天造轮子第七天 - 中间件实现 - Compose 的 N 种姿势](https://juejin.cn/post/6893338774088974343)

📒 [使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库](https://juejin.cn/post/7117886038126624805)

📒 [如何使用 React Hooks 重构类组件](https://mp.weixin.qq.com/s/rFb07qMzV-JrzvVlDEgUAg)

📒 Why DRY is the most over-rated programming principle

> https://gordonc.bearblog.dev/dry-most-over-rated-programming-principle/

📒 What makes a great software engineer

> https://swizec.com/blog/what-makes-a-great-software-engineer/

📒 构建面向未来的前端架构

本文是关于前端架构的组件部分。如果有写过组件，可能都有遇到随着业务迭代而快速增加复杂度，最终写出臃肿不堪难以维护的组件。为啥别人写的代码简洁易懂？缺的是经验吗？不是，缺的是方法论。我觉得此方法同样适用非组件场景。

心智模型的重要性。心智模型会影响我们的决定，进而影响代码的整体结构。如果一直做错误的大大小小的决定，那代码很快就会变成屎山。每个人的心智模型不可能完全一样，所以注定会做出不同的决定。对于团队而言，用框架和工具约束，让大家不做或少做决定是个很好的策略，比如用 prettier 统一编码风格。

文中有个例子。你写了一个组件，过了一周，产品迭代，而之前写的组件不能很好满足新需求。这时你有两个选择，A）思考之前的抽象是否正确，如果不正确，分解了重新做，B）增加一个额外 props，组件里加一些恶心的条件判断。你会如何选择？你会在乎之前投入的沉没成本还是面向未来考虑更多？其实没有对错，注意 By Scene。

自上而下 vs. 自下而上。「你可以自上而下或自下而上地构建。也就是说，你可以从构建层次结构中较高的组件开始。在比较简单的例子中，通常自上而下更容易，而在较大的项目中，自下而上更容易，并在构建过程中编写测试。」

自上而下是直观的、能快速出货的，大家通常也会这么干。当涉及到分解用户界面时，在功能区域周围画上方框，然后成为你的组件。这种功能分解的过程是自上而下的，通常会直接导致创建具有特定抽象性的专门组件。需求会改变。而在几个迭代过程中，这些组件很容易迅速变成单体巨石组件。

单体巨石组件有不少问题，包括 1）不容易复用子组件 2）包变大，比如 SSR 场景可能只希望渲染第一时间被用户看到的组件从而提速 3）rerender 问题导致运行时性能不好，也会让代码复杂，出现很多不必要的 memo 调用 4）不好的抽象导致项目复杂，迭代困难。「敏捷软件开发最重要的经验之一是迭代的价值；这在软件开发的各个层面都是正确的，包括架构。」

自下而上不那么直观，最初可能比较慢。因为这种方式会产生很多小组件，而实际中不是每个小组件在最初都需要可复用。所以前期需要花更多时间和努力，让复杂性被封装在每个小组件里。好处是长远看会更快，因为适应性更强。同时避免了单体巨石组件和前面介绍的他会带来的大量问题。

> https://frontendmastery.com/posts/building-future-facing-frontend-architectures/
