import { useState } from 'react';
import { convertTextToSpeech } from '../services/textToSpeechService';

export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const play = async (text: string) => {
    if (isPlaying) {
      return;
    }

    setIsPlaying(true);
    const url = await convertTextToSpeech(text);
    if (url) {
      setAudioUrl(url);
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => {
        setIsPlaying(false);
        setAudioUrl(null);
      };
    } else {
      setIsPlaying(false);
    }
  };

  return { isPlaying, play };
};