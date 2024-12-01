import React, { useEffect } from 'react';
import { Mic, Square } from 'lucide-react';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import { useAuth } from '../store/authStore';

export function AudioRecorder() {
  const { isRecording, startRecording, stopRecording, audioChunks } = useAudioRecorder();
  const { user } = useAuth();

  useEffect(() => {
    if (audioChunks.length > 0) {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      // Here you would typically upload to Firebase Storage
      console.log('New audio segment ready:', blob.size);
    }
  }, [audioChunks]);

  if (user?.role !== 'child') return null;

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`p-4 rounded-full shadow-lg ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors`}
      >
        {isRecording ? (
          <Square className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}