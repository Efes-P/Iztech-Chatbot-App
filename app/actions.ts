'use server'

import { kv } from '@vercel/kv'

import { type Chat } from '@/lib/types'
import { revalidatePath } from 'next/cache'

export async function getChat(id: string) {
  // export async function getChat(id: string, userId: string) {
  // const session = await auth()

  // if (userId !== session?.user?.id) {
  //   return {
  //     error: 'Unauthorized'
  //   }
  // }

  const chat = await kv.hgetall<Chat>(`chat:${id}`)

  // if (!chat || (userId && chat.userId !== userId)) {
  // return null
  // }

  if (!chat) {
    return null
  }

  return chat
}

export async function saveChat(chat: Chat) {
  // If KV is not configured, skip persistence in local dev to prevent 500 errors
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    console.warn('KV not configured. Skipping chat persistence for id:', chat.id)
    return
  }

  // const session = await auth()

  // if (session && session.user) {
  const pipeline = kv.pipeline()
  pipeline.hmset(`chat:${chat.id}`, chat)
  // pipeline.zadd(`user:chat:${chat.userId}`, {
  //   score: Date.now(),
  //   member: `chat:${chat.id}`
  // })
  await pipeline.exec()
  // } else {
  // return
  // }

  revalidatePath(`/fuar-asistani/chat/${chat.id}`)
}
