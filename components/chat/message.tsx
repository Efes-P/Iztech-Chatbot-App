'use client'

import { IconUser } from '@/components/ui/icons'
import { useStreamableText } from '@/lib/hooks/use-streamable-text'
import { cn } from '@/lib/utils'
import { StreamableValue } from 'ai/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { MemoizedReactMarkdown } from '../markdown'
import { SvgIcons } from '../svg-icons'
import { CodeBlock } from '../ui/codeblock'
import { spinner } from './spinner'
import speakFromVariable from '@/lib/speak'
import { useEffect, useRef } from 'react'

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <IconUser className="size-8" />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2 pt-3">
        {children}
      </div>
    </div>
  )
}

export function BotMessage({
  content,
  className
}: {
  content: string | StreamableValue<string>
  className?: string
}) {
  const text = useStreamableText(content)
  const lastSpokenRef = useRef<string>('')
  const lastIndexRef = useRef<number>(0)

  // Otomatik TTS devre dışı - kullanıcı manuel TTS butonunu kullanacak
  // useEffect(() => {
  //   const current = text || ''
  //   if (!current) return
  //   // If content shrank (shouldn't happen), reset index
  //   if (current.length < lastIndexRef.current) {
  //     lastIndexRef.current = 0
  //   }
  //   const delta = current.slice(lastIndexRef.current).trim()
  //   if (!delta) return
  //   lastIndexRef.current = current.length
  //   lastSpokenRef.current = current
  //   try {
  //     speakFromVariable(delta, { cancel: false })
  //   } catch (e) {
  //     console.warn('TTS not available:', e)
  //   }
  // }, [text])

  return (
    <div className={cn('group relative flex items-start md:-ml-12', className)}>
      <div className="flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border p-2 shadow-sm">
        <SvgIcons.iztekLogoWithoutText />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1 pt-3">
        <MemoizedReactMarkdown
          className="prose break-words  prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {text}
        </MemoizedReactMarkdown>
      </div>
    </div>
  )
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[48px] shrink-0 select-none items-center justify-center rounded-md border p-2 shadow-sm">
        <SvgIcons.iztekLogoWithoutText />
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  )
}
