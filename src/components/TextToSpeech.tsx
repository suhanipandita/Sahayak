import React from 'react';
import { Volume2 } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

interface TextToSpeechProps {
  text: string;
}

export function TextToSpeech({ text }: TextToSpeechProps) {
  const { isPlaying, play } = useTextToSpeech();

  return (
    <button onClick={() => play(text)} disabled={isPlaying}>
      <Volume2 className="w-5 h-5" />
    </button>
  );
}