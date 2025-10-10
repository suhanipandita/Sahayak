import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { ChatBubble } from './ChatBubble';
import { NameInput } from './NameInput';
import { OccupationInput } from './OccupationInput';
import { TextToSpeech } from './TextToSpeech';

interface OnboardingScreenProps {
  onComplete: (userData: { name: string; occupation: string }) => void;
  isVoiceMode: boolean; // 1. Add this prop
}

export function OnboardingScreen({ onComplete, isVoiceMode }: OnboardingScreenProps) { // 2. Receive the prop
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [showOccupationInput, setShowOccupationInput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setShowNameInput(false);
      setTimeout(() => setShowOccupationInput(true), 1000);
    }
  };

  const handleOccupationSubmit = () => {
    if (occupation.trim()) {
      setShowOccupationInput(false);
      setIsProcessing(true);
      setTimeout(() => {
        onComplete({ name: name.trim(), occupation: occupation.trim() });
      }, 1500);
    }
  };

  const getCurrentStep = () => {
    if (showNameInput) return 7;
    if (showOccupationInput) return 8;
    return 10;
  };

  const welcomeMessage = "Welcome! Let's get to know you so we can help you better.";
  const occupationMessage = "Great! Now, what is your occupation? This helps us provide more relevant services.";
  const footerMessage = "Secure government communication platform";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-8 py-12">
            <ProgressBar currentStep={getCurrentStep()} totalSteps={10} />

            <div className="space-y-4 mb-8">
              {/* 3. Add TextToSpeech to chat bubbles */}
              <div className="flex items-start space-x-2">
                <ChatBubble message={welcomeMessage} isBot={true} />
                <TextToSpeech text={welcomeMessage} isVoiceMode={isVoiceMode} />
              </div>

              {!showNameInput && name && (
                <ChatBubble message={`Nice to meet you, ${name}!`} isBot={false} />
              )}

              {showOccupationInput && (
                <div className="flex items-start space-x-2">
                  <ChatBubble message={occupationMessage} isBot={true} />
                  <TextToSpeech text={occupationMessage} isVoiceMode={isVoiceMode} />
                </div>
              )}

              {!showOccupationInput && !showNameInput && occupation && !isProcessing && (
                <ChatBubble message={occupation} isBot={false} />
              )}
            </div>

            {/* 4. Pass isVoiceMode to input components */}
            {showNameInput ? (
              <NameInput
                value={name}
                onChange={setName}
                onSubmit={handleNameSubmit}
                isVoiceMode={isVoiceMode}
              />
            ) : showOccupationInput ? (
              <OccupationInput
                value={occupation}
                onChange={setOccupation}
                onSubmit={handleOccupationSubmit}
                isVoiceMode={isVoiceMode}
              />
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Setting up your profile...</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-gray-500">
           {/* 5. Fix footer */}
          <div className="flex justify-center items-center">
             <p className="mr-2">{footerMessage}</p>
             <TextToSpeech text={footerMessage} isVoiceMode={isVoiceMode} />
          </div>
        </div>
      </div>
    </div>
  );
}