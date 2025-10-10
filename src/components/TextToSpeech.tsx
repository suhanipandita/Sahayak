import React from 'react';
import { Volume2 } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

interface TextToSpeechProps {
  text: string;
  isVoiceMode: boolean; // Add this new prop
}

export function TextToSpeech({ text, isVoiceMode }: TextToSpeechProps) {
  const { isPlaying, play } = useTextToSpeech();

  // If voice mode is disabled, render nothing.
  if (!isVoiceMode) {
    return null;
  }

  return (
    <button onClick={() => play(text)} disabled={isPlaying}>
      <Volume2 className="w-5 h-5" />
    </button>
  );
}