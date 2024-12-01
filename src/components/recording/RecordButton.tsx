import React from 'react';
import { Mic, MicOff } from 'lucide-react';

interface RecordButtonProps {
  isRecording: boolean;
  onClick: () => void;
}

export function RecordButton({ isRecording, onClick }: RecordButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-48 h-48 rounded-full shadow-xl
        flex items-center justify-center
        transform transition-all duration-300
        ${isRecording 
          ? 'bg-red-500 hover:bg-red-600 scale-110' 
          : 'bg-blue-500 hover:bg-blue-600'
        }
        active:scale-95
      `}
    >
      {isRecording ? (
        <MicOff className="h-24 w-24 text-white" />
      ) : (
        <Mic className="h-24 w-24 text-white" />
      )}
    </button>
  );
}