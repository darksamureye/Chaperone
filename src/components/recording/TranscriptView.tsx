import React from 'react';
import { FileText } from 'lucide-react';

interface TranscriptViewProps {
  transcript?: string;
  isLoading?: boolean;
}

export function TranscriptView({ transcript, isLoading }: TranscriptViewProps) {
  if (isLoading) {
    return (
      <div className="mt-2 text-sm text-gray-500 animate-pulse">
        Generating transcript...
      </div>
    );
  }

  if (!transcript) {
    return (
      <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
        <FileText className="h-4 w-4" />
        No transcript available
      </div>
    );
  }

  return (
    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2 mb-1">
        <FileText className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-600">Transcript</span>
      </div>
      <p className="text-sm text-gray-700 whitespace-pre-wrap">{transcript}</p>
    </div>
  );
}