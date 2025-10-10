import React from 'react';
import { Briefcase } from 'lucide-react';
import { TextToSpeech } from './TextToSpeech';

interface OccupationInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isVoiceMode: boolean;
}

export function OccupationInput({ value, onChange, onSubmit, isVoiceMode }: OccupationInputProps) {
  const placeholder = "Enter your occupation...";
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Briefcase className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        placeholder={placeholder}
        className="w-full pl-10 pr-16 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <TextToSpeech text={placeholder} isVoiceMode={isVoiceMode} />
        <button
          onClick={onSubmit}
          className="ml-2 px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-300"
          disabled={!value.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}