import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { PromptForm } from '@/components/prompt-form'
import type { AI } from '@/lib/chat/actions'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { useUIState } from 'ai/rsc'
import { useState, useRef, useEffect } from 'react'

export interface ChatPanelProps {
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [messages] = useUIState<typeof AI>()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [initialRender, setInitialRender] = useState(true)

  const exampleMessages = [
    {
      tag: 'technology',
      heading: 'Teknoloji',
      message: `Teknoloji ile ilgili etkinlikleri söyler misin?`,
      icon: '💻'
    },
    {
      tag: 'entertainment',
      heading: 'Eğlence',
      message: `Eğlence ile ilgili etkinlikleri söyler misin?`,
      icon: '🎉'
    },
    {
      tag: 'culture-art',
      heading: 'Kültür & Sanat',
      message: `Kültür & Sanat ile ilgili etkinlikleri söyler misin?`,
      icon: '🎭'
    },
    {
      tag: 'sport',
      heading: 'Spor',
      message: `Spor ile ilgili etkinlikleri söyler misin?`,
      icon: '🏃‍♂️'
    },
    {
      tag: 'kids',
      heading: 'Çocuk',
      message: `Çocuk ile ilgili etkinlikleri söyler misin?`,
      icon: '🎈'
    },
    {
      tag: 'education',
      heading: 'Eğitim',
      message: `Eğitim ile ilgili etkinlikleri söyler misin?`,
      icon: '📚'
    },

    {
      tag: 'science',
      heading: 'Bilim',
      message: `Bilim ile ilgili etkinlikleri söyler misin?`,
      icon: '🔬'
    },
    {
      tag: 'gastronomy',
      heading: 'Gastronomi',
      message: `Gastronomi ile ilgili etkinlikleri söyler misin?`,
      icon: '🍽️'
    }
  ]

  function handleCategoryClick(tag: string) {
    setSelectedTags(prevSelected => {
      const isAlreadySelected = prevSelected.includes(tag)
      const updatedTags = isAlreadySelected
        ? prevSelected.filter(c => c !== tag)
        : [...prevSelected, tag]

      if (!isAlreadySelected && !initialRender) {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
      }

      return updatedTags
    })
  }

  useEffect(() => {
    setInitialRender(false)
  }, [])

  return (
    <div className="fixed inset-x-0 bottom-0 w-full duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />

      <div className="mx-auto sm:max-w-2xl sm:px-4">
        {messages.length === 0 && (
          <>
            <div className="text-lg border-l-[3px] text-muted-foreground mb-3 px-3 mx-4 sm:mx-0 font-bold">
              İlgi alanlarınızı seçiniz
            </div>
            <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0">
              {exampleMessages.map(example => {
                const isSelected = selectedTags.includes(example.tag)

                return (
                  <div
                    key={example.heading}
                    className={`cursor-pointer rounded-lg border p-2 md:p-4 block ${isSelected ? 'bg-blue-100' : 'bg-white'
                      }`}
                    onClick={() => handleCategoryClick(example.tag)}
                  >
                    <div className="flex gap-2 items-center">
                      {example.icon && <span>{example.icon}</span>}
                      <div className="text-sm font-semibold flex-1 line-clamp-1">
                        {example.heading}
                      </div>
                      {isSelected && <CheckCircledIcon />}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            input={input}
            setInput={setInput}
            selectedTags={selectedTags}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  )
}
