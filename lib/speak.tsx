"use client";

// Next.js (Client Component) içinde kullanılmak üzere,
// herhangi bir UI içermeyen ve sadece değişkendeki metni okuyan fonksiyon.
export function speakFromVariable(
  text: string,
  options?: { cancel?: boolean; lang?: string; rate?: number; pitch?: number; voice?: string }
): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    throw new Error("Tarayıcınız Web Speech API (speechSynthesis) desteklemiyor.");
  }

  const synth = window.speechSynthesis;

  const { cancel = true, lang = "tr-TR", rate, pitch, voice } = options || {};

  // Eşzamanlı konuşmaları engellemek için mevcut seslendirmeyi iptal et (isteğe bağlı)
  if (cancel) {
    synth.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  if (typeof rate === 'number') utterance.rate = rate;  // 0.1 - 10
  if (typeof pitch === 'number') utterance.pitch = pitch; // 0 - 2

  if (voice) {
    const voices = synth.getVoices();
    const match = voices.find(v => v.name === voice);
    if (match) utterance.voice = match;
  }

  synth.speak(utterance);
}

export default speakFromVariable;