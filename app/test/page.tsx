"use client";

import React, { useEffect, useMemo, useState } from "react";
import speakFromVariable from "@/lib/speak";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VoiceRecorder from "@/components/ui/mic";
import { ChatMessageActions } from "@/components/chat-message-actions";
import { BotMessage, UserMessage } from "@/components/chat/message";
import { Separator } from "@/components/ui/separator";

export default function TestPage() {
  const [text, setText] = useState<string>(
    "Merhaba! Bu bir TTS (metin okuma) ve STT (konuşma tanıma) test sayfasıdır."
  );

  const [lang, setLang] = useState<string>("tr-TR");
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState<string>("");

  const isTtsSupported = useMemo(
    () => typeof window !== "undefined" && "speechSynthesis" in window,
    []
  );

  useEffect(() => {
    if (!isTtsSupported) return;
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const v = synth.getVoices();
      setVoices(v);
      // Varsayılan sesi seç (dil ile eşleşeni tercih et)
      if (!voiceName && v.length) {
        const preferred = v.find((vv) => vv.lang === lang);
        setVoiceName(preferred?.name || v[0].name);
      }
    };

    loadVoices();
    synth.addEventListener("voiceschanged", loadVoices);
    return () => synth.removeEventListener("voiceschanged", loadVoices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTtsSupported, lang]);

  const handleSpeak = () => {
    try {
      speakFromVariable(text, { cancel: true, lang, rate, pitch, voice: voiceName || undefined });
    } catch (e) {
      console.warn("TTS desteklenmiyor veya hata oluştu:", e);
      alert("TTS desteklenmiyor veya başlatılamadı.");
    }
  };

  const handleStop = () => {
    try {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      console.warn("TTS durdurulamadı:", e);
    }
  };

  const handleTranscribed = (t: string) => {
    // STT çıktısını metnin sonuna ekle
    setText((prev) => (prev ? prev + "\n" + t : t));
  };

  // Mock chat mesajları TTS testi için
  const mockMessages = [
    {
      id: '1',
      role: 'user' as const,
      content: 'Merhaba! TTS özelliğini test etmek istiyorum.'
    },
    {
      id: '2', 
      role: 'assistant' as const,
      content: 'Merhaba! Ben Fuar Asistanı. Size İzmir\'deki etkinlikler hakkında bilgi verebilirim. **TTS özelliği** ile mesajlarımı sesli olarak dinleyebilirsiniz. Mesajımın yanındaki megafon butonuna tıklayarak beni dinleyebilirsiniz!'
    },
    {
      id: '3',
      role: 'user' as const, 
      content: 'Teknoloji etkinlikleri hakkında bilgi verir misin?'
    },
    {
      id: '4',
      role: 'assistant' as const,
      content: `İzmir'de düzenlenen teknoloji etkinlikleri:

**Yaklaşan Teknoloji Etkinlikleri:**
- *Yapay Zeka ve Makine Öğrenimi Çalıştayı* - 15 Aralık 2024
- *blok zincir tanıtımı* - 22 Aralık 2024  
- *Girişim gecesi* - 28 Aralık 2024

Bu etkinlikler hakkında daha detaylı bilgi almak ister misiniz? **TTS butonu** ile bu mesajı dinleyebilirsiniz!`
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto p-4 md:p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">TTS ve STT Test Sayfası</h1>
          <p className="text-sm text-muted-foreground">
            Aşağıdaki alandan metni okutup (TTS) veya mikrofon ile konuşup (STT) metne dönüştürebilirsiniz.
          </p>
        </div>

        {/* TTS Kontrolleri */}
        <section className="space-y-4 rounded-lg border bg-background p-4">
          <h2 className="text-lg font-medium">TTS (Metin Okuma)</h2>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Dil</label>
              <select
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="tr-TR">Türkçe (tr-TR)</option>
                <option value="en-US">English (en-US)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Ses (Voice)</label>
              <select
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={voiceName}
                onChange={(e) => setVoiceName(e.target.value)}
              >
                {voices
                  .filter((v) => !lang || v.lang === lang)
                  .map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                {voices.length === 0 && <option value="">Ses bulunamadı</option>}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Hız (rate): {rate.toFixed(2)}</label>
              <Input
                type="range"
                min={0.5}
                max={2}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Tiz (pitch): {pitch.toFixed(2)}</label>
              <Input
                type="range"
                min={0}
                max={2}
                step={0.1}
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
              />
            </div>
          </div>

          <Textarea
            className="min-h-[140px]"
            placeholder="Okunacak metni yazın..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex items-center gap-2">
            <Button onClick={handleSpeak} disabled={!isTtsSupported}>
              Konuş
            </Button>
            <Button variant="secondary" onClick={handleStop} disabled={!isTtsSupported}>
              Durdur
            </Button>
            <Button variant="ghost" onClick={() => setText("")}>Temizle</Button>
          </div>

          {!isTtsSupported && (
            <p className="text-xs text-red-600">
              Tarayıcınız Web Speech API (speechSynthesis) desteklemiyor. Lütfen Chrome veya Edge deneyin.
            </p>
          )}
        </section>

        {/* STT Kontrolleri */}
        <section className="space-y-4 rounded-lg border bg-background p-4">
          <h2 className="text-lg font-medium">STT (Konuşmayı Metne Çevir)</h2>
          <div className="flex items-center gap-3">
            <VoiceRecorder onTranscribed={handleTranscribed} />
            <p className="text-sm text-muted-foreground">Mikrofon tuşuna basıp konuşun, bittiğinde tekrar basın.</p>
          </div>
          <Textarea
            className="min-h-[100px]"
            placeholder="Konuşma çıktısı burada görünecek..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </section>

        {/* Mock Chat TTS Test */}
        <section className="space-y-4 rounded-lg border bg-background p-4">
          <h2 className="text-lg font-medium">TTS Chat Test (API Olmadan)</h2>
          <p className="text-sm text-muted-foreground">
            Aşağıdaki mock chat mesajlarında bot cevaplarının yanındaki 🔉 butonuna tıklayarak TTS özelliğini test edebilirsiniz.
          </p>
          
          <div className="max-w-2xl space-y-4">
            {mockMessages.map((message, index) => (
              <div key={message.id}>
                <div className="group relative mb-4 flex items-start">
                  <div className={`flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow ${
                    message.role === 'user' 
                      ? 'bg-background' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {message.role === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
                    <div className="prose break-words prose-p:leading-relaxed prose-pre:p-0">
                      <p className="mb-2 last:mb-0 whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <ChatMessageActions message={message} />
                  </div>
                </div>
                {index < mockMessages.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}