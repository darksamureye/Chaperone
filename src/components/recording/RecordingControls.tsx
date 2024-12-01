import React from 'react';
import { RecordButton } from './RecordButton';
import { RecordingStatus } from './RecordingStatus';

interface RecordingControlsProps {
  isRecording: boolean;
  duration: number;
  onStartRecording: () => Promise<void>;
  onStopRecording: () => void;
}

export function RecordingControls({
  isRecording,
  duration,
  onStartRecording,
  onStopRecording
}: RecordingControlsProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <RecordingStatus isRecording={isRecording} duration={duration} />
      <RecordButton 
        isRecording={isRecording} 
        onClick={isRecording ? onStopRecording : onStartRecording}
      />
      <p className="text-lg text-white/90 max-w-xs text-center">
        {isRecording 
          ? 'Your guardian is watching over you!' 
          : 'Tap the magical orb to activate protection'}
      </p>
    </div>
  );
}