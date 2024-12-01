import React from 'react';
import { format } from 'date-fns';
import { Play, Pause } from 'lucide-react';
import { AudioSegment } from '../../types/audio';

interface RecordingsListProps {
  recordings: AudioSegment[];
  currentPlaying: string | null;
  onPlayPause: (recordingId: string, url: string) => void;
}

export function RecordingsList({ recordings, currentPlaying, onPlayPause }: RecordingsListProps) {
  return (
    <div className="space-y-4">
      {recordings.map((recording) => (
        <div
          key={recording.id}
          className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
        >
          <div>
            <p className="font-medium">
              {format(recording.timestamp, 'PPpp')}
            </p>
            <p className="text-sm text-gray-500">
              Duration: {Math.round(recording.duration / 60000)} minutes
            </p>
          </div>
          <button
            onClick={() => onPlayPause(recording.id, recording.url)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {currentPlaying === recording.id ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}