"use client";

import React, { useRef, useState, useEffect } from "react";

interface VoiceRecorderProps {
  onTranscribed?: (text: string) => void;
  disabled?: boolean;
}

export default function VoiceRecorder({ onTranscribed, disabled = false }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'tr-TR'; // Türkçe
      
      let finalTranscript = '';
      
      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        // Show interim results visually if needed
        console.log('Interim:', interimTranscript);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
        setIsListening(false);
        
        if (finalTranscript.trim()) {
          onTranscribed?.(finalTranscript.trim());
          finalTranscript = ''; // Reset for next recording
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        setIsListening(false);
      };
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognitionRef.current = recognition;
    }
  }, [onTranscribed]);

  const handleClick = async () => {
    if (!isSupported) {
      alert('Tarayıcınız ses tanıma özelliğini desteklemiyor. Chrome veya Edge kullanmayı deneyin.');
      return;
    }

    if (isRecording) {
      // Kaydı durdur
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
      // Kaydı başlat
      try {
        setIsRecording(true);
        recognitionRef.current.start();
      } catch (error) {
        console.error('Ses tanıma başlatma hatası:', error);
        setIsRecording(false);
        alert('Ses tanıma başlatılamadı. Lütfen mikrofon izni verdiğinizden emin olun.');
      }
    }
  };

  if (!isSupported) {
    return (
      <div className="relative">
        <button
          disabled
          className="w-9 h-9 rounded-full bg-gray-300 text-gray-500 text-xs font-medium flex items-center justify-center cursor-not-allowed"
          title="Tarayıcınız ses tanıma özelliğini desteklemiyor"
        >
          🎤
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`
          w-9 h-9 rounded-full transition-all duration-200 text-white text-xs font-medium flex items-center justify-center
          ${isRecording 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }
        `}
        title={isRecording ? 'Konuşmayı durdur' : 'Konuşmaya başla'}
      >
        {isRecording ? '⏹' : '🎤'}
      </button>
      
      {/* Listening indicator */}
      {isListening && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
          Dinleniyor...
        </div>
      )}
    </div>
  );
}