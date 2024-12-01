import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { 
  Play, Pause, Lock, RefreshCw, Download,
  MapPin, Mic, Radio, Settings, Bell
} from 'lucide-react';
import { AudioSegment } from '../types/audio';
import { useAuth } from '../store/authStore';
import { useSettingsStore } from '../store/settingsStore';
import { useRecordings } from '../hooks/useRecordings';
import { TranscriptView } from './recording/TranscriptView';
import { DailyQuote } from './DailyQuote';
import { HaloIcon } from './icons/HaloIcon';
import { transcribeAudio } from '../services/firebase/transcription';
import toast from 'react-hot-toast';

export function ParentDashboard() {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [isLiveMonitoring, setIsLiveMonitoring] = useState(false);
  const [isLocationTracking, setIsLocationTracking] = useState(false);
  const { user } = useAuth();
  const { stopPin, setStopPin } = useSettingsStore();
  const { recordings, isLoading, refreshRecordings } = useRecordings();

  const toggleLiveMonitoring = () => {
    setIsLiveMonitoring(!isLiveMonitoring);
    toast.success(
      !isLiveMonitoring ? 'Live audio monitoring enabled' : 'Live audio monitoring disabled'
    );
  };

  const toggleLocationTracking = () => {
    setIsLocationTracking(!isLocationTracking);
    toast.success(
      !isLocationTracking ? 'Location tracking enabled' : 'Location tracking disabled'
    );
  };

  // Rest of the existing functions...

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Guardian Dashboard
          </h1>
          <p className="text-gray-600">Protecting what matters most</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-white/80
                        border-2 border-transparent hover:border-indigo-100 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <Radio className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Monitoring</h3>
                  <p className="text-sm text-gray-500">Real-time audio feed</p>
                </div>
              </div>
              <button
                onClick={toggleLiveMonitoring}
                className={`p-2 rounded-xl transition-colors ${
                  isLiveMonitoring 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Mic className="h-5 w-5" />
              </button>
            </div>
            <div className="h-24 bg-gray-50 rounded-xl flex items-center justify-center">
              {isLiveMonitoring ? (
                <div className="flex items-center gap-2 text-indigo-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                  Live Monitoring Active
                </div>
              ) : (
                <span className="text-gray-400">Monitoring Inactive</span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-white/80
                        border-2 border-transparent hover:border-indigo-100 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location Tracking</h3>
                  <p className="text-sm text-gray-500">Real-time location updates</p>
                </div>
              </div>
              <button
                onClick={toggleLocationTracking}
                className={`p-2 rounded-xl transition-colors ${
                  isLocationTracking 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
            <div className="h-24 bg-gray-50 rounded-xl flex items-center justify-center">
              {isLocationTracking ? (
                <div className="flex items-center gap-2 text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  Location Tracking Active
                </div>
              ) : (
                <span className="text-gray-400">Tracking Inactive</span>
              )}
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-sm bg-white/80">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-700">
            <HaloIcon className="h-6 w-6" />
            Security Settings
          </h2>
          <form onSubmit={handleSetPin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stop Recording PIN
              </label>
              <div className="flex gap-4">
                <input
                  type="password"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="Enter 4-digit PIN"
                  className="flex-grow px-4 py-2 border-2 border-gray-200 rounded-xl
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                           transition-all duration-200"
                  maxLength={4}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500
                           text-white rounded-xl font-medium
                           hover:from-indigo-600 hover:to-purple-600
                           transform transition-all duration-200
                           hover:shadow-lg active:scale-95"
                >
                  Set PIN
                </button>
              </div>
            </div>
            {!stopPin && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <Lock className="h-4 w-4" />
                Please set a PIN to protect the stop recording function
              </p>
            )}
          </form>
        </div>

        {/* Recordings Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/80">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-700">Recordings</h2>
            <button
              onClick={refreshRecordings}
              className="p-2 rounded-full hover:bg-indigo-50 transition-colors"
              title="Refresh recordings"
            >
              <RefreshCw className="h-5 w-5 text-indigo-600" />
            </button>
          </div>
          
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12 text-gray-500">
                Loading recordings...
              </div>
            ) : recordings.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No recordings available
              </div>
            ) : (
              recordings.map((recording) => (
                <div
                  key={recording.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex flex-col
                           border-2 border-gray-50 hover:border-indigo-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">
                        {format(recording.timestamp, 'PPpp')}
                      </p>
                      <p className="text-sm text-gray-500">
                        Duration: {Math.round(recording.duration / 60000)} minutes
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePlay(recording.url)}
                        className="p-2 rounded-full hover:bg-indigo-50 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6 text-indigo-600" />
                        ) : (
                          <Play className="h-6 w-6 text-indigo-600" />
                        )}
                      </button>
                      {recording.transcript && (
                        <button
                          onClick={() => handleDownloadTranscript(recording)}
                          className="p-2 rounded-full hover:bg-green-50 transition-colors"
                          title="Download transcript"
                        >
                          <Download className="h-5 w-5 text-green-600" />
                        </button>
                      )}
                      {!recording.transcript && (
                        <button
                          onClick={() => handleTranscribe(recording)}
                          className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full
                                   hover:bg-indigo-100 transition-colors"
                        >
                          Transcribe
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <TranscriptView
                    transcript={recording.transcript}
                    isLoading={false}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Daily Quote */}
        <div className="mt-8">
          <DailyQuote />
        </div>
      </div>
    </div>
  );
}