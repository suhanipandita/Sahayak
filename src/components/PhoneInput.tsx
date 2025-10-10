import React from 'react';
import { Phone } from 'lucide-react';
import { TextToSpeech } from './TextToSpeech';

// 1. Ensure the prop is defined in the interface
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  darkMode: boolean;
  isVoiceMode: boolean; 
}

// 2. Ensure the prop is destructured from the component's arguments
export function PhoneInput({ value, onChange, placeholder, darkMode, isVoiceMode }: PhoneInputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Phone className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-10 pr-10 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          darkMode
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
        }`}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {/* 3. Ensure the prop is passed to the TextToSpeech component */}
        <TextToSpeech text={placeholder} isVoiceMode={isVoiceMode} />
      </div>
    </div>
  );
}