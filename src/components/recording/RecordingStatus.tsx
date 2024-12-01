import React from 'react';
import { Clock } from 'lucide-react';
import { formatDuration } from '../../utils/audio';

interface RecordingStatusProps {
  isRecording: boolean;
  duration: number;
}

export function RecordingStatus({ isRecording, duration }: RecordingStatusProps) {
  return (
    <div className={`
      flex items-center gap-2 px-4 py-2 rounded-full
      ${isRecording ? 'bg-red-500/10 text-red-500' : 'bg-gray-100 text-gray-500'}
      transition-colors duration-300
    `}>
      <Clock className="h-4 w-4" />
      <span className="font-medium">
        {isRecording ? formatDuration(duration) : 'Ready to Record'}
      </span>
    </div>
  );
}