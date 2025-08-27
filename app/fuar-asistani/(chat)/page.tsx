import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { client } from '@/lib/openai'
import { nanoid } from '@/lib/utils'

export const metadata = {
  title: 'Fuar Asistanı'
}

export const dynamic = 'force-dynamic'

export default async function IndexPage() {
  let threadId: string
  try {
    const thread = await client.beta.threads.create()
    threadId = thread.id
  } catch (err) {
    console.error('Failed to create OpenAI thread. Falling back to local id.', err)
    threadId = nanoid()
  }

  return (
    <AI initialAIState={{ chatId: threadId, messages: [] }}>
      <Chat id={threadId} />
    </AI>
  )
}
