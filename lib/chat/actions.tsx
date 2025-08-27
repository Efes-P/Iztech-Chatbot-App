import 'server-only'

import {
  createAI,
  createStreamableUI,
  createStreamableValue,
  getAIState,
  getMutableAIState
} from 'ai/rsc'

import { BotMessage, SpinnerMessage } from '@/components/chat/message'

import { saveChat } from '@/app/actions'
import { UserMessage } from '@/components/chat/message'
import { Chat, Message } from '@/lib/types'
import { client } from '../openai'
import { nanoid } from '../utils'

const ASSISTANT_ID = 'asst_Mn5jX7vUoY61xL76THOb02FA'

export async function submitUserMessage(
  content: string,
  selectedTags: string[]
) {
  'use server'

  try {
    const aiState = getMutableAIState<typeof AI>()

    const THREAD_ID = aiState.get().chatId

    if (selectedTags.length > 0) {
      const messages = await client.beta.threads.messages.list(THREAD_ID)

      if (messages.data.length === 0) {
        await client.beta.threads.messages.create(THREAD_ID, {
          role: 'user',
          content: `selectedTags: ${selectedTags.toString()}`
        })
      }
    }

    aiState.update({
      ...aiState.get(),
      messages: [
        ...aiState.get().messages,
        {
          id: nanoid(),
          role: 'user',
          content
        }
      ]
    })

    const textStream = createStreamableValue('')
    const uiStream = createStreamableUI(<SpinnerMessage />)

    const runQueue = []

    let isSpinnerVisible = true

    ;(async () => {
      await client.beta.threads.messages.create(THREAD_ID, {
        role: 'user',
        content
      })

      const run = await client.beta.threads.runs.create(THREAD_ID, {
        assistant_id: ASSISTANT_ID,
        stream: true
      })

      runQueue.push({ id: nanoid(), run })

      let message = ''

      while (runQueue.length > 0) {
        const latestRun = runQueue.shift()

        if (latestRun) {
          for await (const delta of latestRun.run) {
            const { data, event } = delta

            if (event === 'thread.message.delta') {
              if (isSpinnerVisible) {
                uiStream.update(<BotMessage content={textStream.value} />)
                isSpinnerVisible = false
              }

              data.delta.content?.map((part: any) => {
                if (part.type === 'text') {
                  if (part.text) {
                    message += part.text.value
                    textStream.update(part.text.value)
                  }
                }
              })
            } else if (event === 'thread.run.failed') {
              console.log(data)
            }
          }
        }
      }

      textStream.done()
      uiStream.done()

      aiState.done({
        ...aiState.get(),
        messages: [
          ...aiState.get().messages,
          {
            id: nanoid(),
            role: 'assistant',
            content: message
          }
        ]
      })
    })()

    return {
      id: nanoid(),
      display: uiStream.value
    }
  } catch (error) {
    console.error('Error communicating with the assistant API:', error)
    return null
  }
}

export type AIState = {
  chatId: string
  messages: Message[]
}

export type UIState = {
  id: string
  display: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  onGetUIState: async () => {
    'use server'

    const aiState = getAIState() as Chat

    if (aiState) {
      const uiState = getUIStateFromAIState(aiState)

      return uiState
    } else {
      return
    }
  },
  onSetAIState: async ({ state }) => {
    'use server'

    const { chatId, messages } = state

    const createdAt = new Date()

    const firstMessageContent = messages[0].content as string
    const title = firstMessageContent.substring(0, 100)

    const chat: Chat = {
      id: chatId,
      title,
      createdAt,
      path: `/fuar-asistani/chat/${chatId}`,
      messages
    }

    await saveChat(chat)
  }
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter(message => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'user' ? (
          <UserMessage>{message.content as string}</UserMessage>
        ) : message.role === 'assistant' &&
          typeof message.content === 'string' ? (
          <BotMessage content={message.content} />
        ) : null
    }))
}
