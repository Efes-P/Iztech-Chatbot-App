import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getChat } from '@/app/actions'
// import { auth } from '@/auth'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
// import { Session } from '@/lib/types'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  // const session = await auth()

  // if (!session?.user) {
  //   return {}
  // }

  // const chat = await getChat(params.id, session.user.id)
  const chat = await getChat(params.id)

  if (!chat || 'error' in chat) {
    redirect('/')
  } else {
    return {
      title: chat?.title.toString().slice(0, 50) ?? 'Chat'
    }
  }
}

export const dynamic = 'force-dynamic'

export default async function ChatPage({ params }: ChatPageProps) {
  const chat = await getChat(params.id)

  if (!chat || 'error' in chat) {
    redirect('/')
  } else {
    return (
      <AI initialAIState={{ chatId: chat.id, messages: chat.messages }}>
        <Chat
          id={chat.id}
          // session={session}
          initialMessages={chat.messages}
        />
      </AI>
    )
  }
}
