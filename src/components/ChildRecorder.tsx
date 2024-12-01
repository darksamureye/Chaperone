import React, { useState, useEffect } from 'react';
import { useBackgroundRecording } from '../hooks/useBackgroundRecording';
import { useSettingsStore } from '../store/settingsStore';
import { PinDialog } from './PinDialog';
import { RecordingControls } from './recording/RecordingControls';
import { CartoonElements } from './decorations/CartoonElements';
import { DailyQuote } from './DailyQuote';
import { GuardianPresence } from './guardian/GuardianPresence';
import { HaloIcon } from './icons/HaloIcon';
import toast from 'react-hot-toast';

export function ChildRecorder() {
  const { isActive, startRecording, stopRecording } = useBackgroundRecording();
  const { validatePin } = useSettingsStore();
  const [showPinDialog, setShowPinDialog] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isFirstConnection, setIsFirstConnection] = useState(true);
  const [isGuardianConnected, setIsGuardianConnected] = useState(false);

  useEffect(() => {
    // Simulate guardian connection after a short delay
    const timer = setTimeout(() => {
      setIsGuardianConnected(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      const startTime = Date.now();
      interval = setInterval(() => {
        setDuration(Date.now() - startTime);
      }, 1000);
    } else {
      setDuration(0);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartRecording = async () => {
    try {
      await startRecording();
      toast.success('Your guardian is now protecting you!', {
        icon: '🌟',
        duration: 3000,
      });
    } catch (error) {
      toast.error('Oops! Something went wrong', {
        icon: '😕',
        duration: 3000,
      });
    }
  };

  const handleStopRecording = () => {
    setShowPinDialog(true);
  };

  const handlePinSubmit = (pin: string) => {
    if (validatePin(pin)) {
      stopRecording();
      setShowPinDialog(false);
      toast.success('Protection paused', {
        icon: '✨',
        duration: 2000,
      });
    } else {
      toast.error("That's not the right code!", {
        icon: '🔒',
        duration: 2000,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                    overflow-hidden">
      <CartoonElements />
      
      <GuardianPresence 
        isConnected={isGuardianConnected}
        isFirstConnection={isFirstConnection}
      />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYyMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative z-10 text-center mt-24">
        <div className="flex justify-center mb-4">
          <HaloIcon />
        </div>
        <h1 className="text-6xl font-bold text-white mb-2">
          Chaperone
        </h1>
        <p className="text-xl text-white/90">
          Your Magical Guardian
        </p>
      </div>

      <div className="relative z-10 flex-grow flex items-center">
        <RecordingControls
          isRecording={isActive}
          duration={duration}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
      </div>

      {isActive && (
        <button
          onClick={handleStopRecording}
          className="relative z-10 mb-8 px-6 py-3 bg-white/90 rounded-full shadow-lg
                   hover:bg-white transition-colors duration-200
                   text-gray-700 font-medium"
        >
          Pause Protection
        </button>
      )}

      <div className="relative z-10 w-full mb-8">
        <DailyQuote />
      </div>

      <PinDialog
        isOpen={showPinDialog}
        onClose={() => setShowPinDialog(false)}
        onSubmit={handlePinSubmit}
        title="Enter Guardian's Secret Code"
      />
    </div>
  );
}