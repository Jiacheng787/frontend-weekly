---
slug: 6月25日内容汇总
title: 6月25日内容汇总
authors: [garfield]
tags: []
---

⭐️ Go 语言日志库

[Go 每日一库之 logrus](https://zhuanlan.zhihu.com/p/105759117)

[Awesome Logging in Go With Logrus](https://betterprogramming.pub/awesome-logging-in-go-with-logrus-70606a49f285)

[Zap Logger](https://www.topgoer.com/%E9%A1%B9%E7%9B%AE/log/ZapLogger.html)

[一文告诉你如何用好uber开源的zap日志库](https://tonybai.com/2021/07/14/uber-zap-advanced-usage/)

⭐️ Go Concurrency Patterns

https://go.dev/talks/2012/concurrency.slide#1

https://go.dev/talks/2013/advconc.slide#1

⭐️ [Go 项目分层下的最佳 error 处理方式](https://mp.weixin.qq.com/s/SnaurQfXDVidrl_ihBQtDA)

⭐️ [Go 将引入标准库 v2 版本，首个动手的是：math/rand/v2！](https://mp.weixin.qq.com/s/b_TYBRIZ3-EORFYq1xRjyQ)

⭐️ [瞬间高并发，goroutine执行结束后的资源占用问题](https://mp.weixin.qq.com/s/iBo-j4990paKb3Pb7Xk-2w)

⭐️ [Go语言中常见100问题-#37 Inaccurate string iteration](https://mp.weixin.qq.com/s/m0WyJyd2JwQfX1SP2H-jrA)

📒 [超越所有开源模型，击败 Claude、Bard，专门用于编程任务的大模型来了](https://mp.weixin.qq.com/s/WGv0geWzSdO7p0LWOvVZnw)

⭐️ [死锁、活锁、饥饿、自旋锁](https://mp.weixin.qq.com/s/G2flIpgksqLVJUMTYj2l8Q)

⭐️ [一个悄然崛起的AI开源项目 ！！](https://mp.weixin.qq.com/s/y1PUDUaQjHqKQxI5K8vGmA)

📒 [前端食堂技术周刊第 87 期：2023 Stackoverflow、Bun v0.6.9、React 是否迎来了 Angular.js 时刻、Vercel AI](https://juejin.cn/post/7246224746005463096)

⭐️ Introducing the Vercel AI SDK

Vercel 推出了全新的工具来改善 AI 体验：

- Vercel AI SDK：轻松地从 AI 模型中获取 API 响应；
- Chat & Prompt Playground：探索来自 OpenAI、Hugging Face 等的模型；
- AI Chatbot：使用 Next.js 构建的开源 AI 聊天应用模板。

Vercel AI SDK 是一个开源库，旨在帮助开发者在 JavaScript 和 TypeScript 中构建 AI 流式聊天应用。该 SDK 支持 React/Next.js、Svelte/SvelteKit，即将支持 Nuxt/Vue。

可以在终端中输入以下命令来安装此 SDK：

```bash
$ npm install ai
```

Vercel 的 AI SDK 支持互操作性，并为 OpenAI、LangChain 和 Hugging Face Inference 提供一流的支持。这意味着无论首选的 AI 模型提供商是哪个，都可以利用 Vercel AI SDK 创建前沿的流式 UI 体验。

```ts
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

// 创建一个 OpenAI API 客户端
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

// 将运行时设置为 edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // 从请求正文中提取 messages
  const { messages } = await req.json()

  // 根据提示要求 OpenAI 完成流式聊天
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // 将响应转换为友好的文本流
  const stream = OpenAIStream(response)
  // 响应流
  return new StreamingTextResponse(stream)
}
```

Vercel AI SDK 包括用于数据获取和渲染流式文本响应的 React 和 Svelte 钩子。这些钩子使得应用能够实时、动态地渲染数据，为用户提供沉浸式和交互式的体验。

现在，借助 `useChat` 和 `useCompletion`，构建丰富的聊天或完成接口只需要几行代码：

```ts
'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
```

参考：

https://vercel.com/blog/introducing-the-vercel-ai-sdk

📒 [Vercel 推出 AI SDK、AI 应用模板，快速构建 AI 应用！](https://mp.weixin.qq.com/s/syV0qUsfEPWzcGlxPhN4OQ)

📒 [芜湖，埋点还可以这么做？这也太简单了](https://mp.weixin.qq.com/s/UcnPwawFAd85wdKwO4XSVA)

⭐️ [\[代码附录\] SIMD能力初体验](https://mp.weixin.qq.com/s/q-keuybJ2d-QMXWoPpSbPA)

📒 [【第2976期】前端构建工具的未来](https://mp.weixin.qq.com/s/Mcr_kYVIEmpdm_NzpC4ZcA)

⭐️ [Go语言包设计指南](https://mp.weixin.qq.com/s/_xA6bhKTm543i3QV8EZMSg)

⭐️ [Go语言爱好者周刊：第 191 期 —— 父亲节快乐](https://mp.weixin.qq.com/s/NCe4KP1JiA8whcg2w_Vgxw)
