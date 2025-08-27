'use client'

import { type Message } from 'ai'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import speakFromVariable from '@/lib/speak'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })
  const [isSpeaking, setIsSpeaking] = useState(false)

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message.content)
  }

  const onSpeak = () => {
    if (isSpeaking) {
      // Konuşmayı durdur
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        setIsSpeaking(false)
      }
      return
    }

    try {
      setIsSpeaking(true)
      
      // Markdown işaretlerini temizle
      const cleanText = message.content
        .replace(/\*\*(.*?)\*\*/g, '$1') // **bold** → bold
        .replace(/\*(.*?)\*/g, '$1')     // *italic* → italic
        .replace(/`(.*?)`/g, '$1')       // `code` → code
        .replace(/#{1,6}\s+/g, '')       // # headers → headers
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // [text](url) → text
        .replace(/\n+/g, ' ')            // newlines → space
        .trim()

      speakFromVariable(cleanText, { 
        cancel: true, 
        lang: 'tr-TR',
        rate: 0.9,
        pitch: 1
      })

      // SpeechSynthesis olaylarını dinle
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        const synth = window.speechSynthesis
        const checkEnd = () => {
          if (!synth.speaking) {
            setIsSpeaking(false)
          } else {
            setTimeout(checkEnd, 100)
          }
        }
        setTimeout(checkEnd, 100)
      }
    } catch (error) {
      console.error('TTS hatası:', error)
      setIsSpeaking(false)
      alert('Ses çıkarma özelliği desteklenmiyor veya bir hata oluştu.')
    }
  }

  return (
    <div
      className={cn(
        'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
        className
      )}
      {...props}
    >
      {/* TTS butonu sadece assistant mesajları için */}
      {message.role === 'assistant' && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onSpeak}
          className={cn(
            'transition-colors',
            isSpeaking ? 'text-blue-600 bg-blue-50' : ''
          )}
        >
          {isSpeaking ? '🔊' : '🔉'}
          <span className="sr-only">
            {isSpeaking ? 'Konuşmayı durdur' : 'Sesli oku'}
          </span>
        </Button>
      )}
      
      <Button variant="ghost" size="icon" onClick={onCopy}>
        {isCopied ? <IconCheck /> : <IconCopy />}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  )
}
