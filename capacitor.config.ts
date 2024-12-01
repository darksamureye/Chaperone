import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chaperone.app',
  appName: 'Chaperone',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true
  },
  plugins: {
    VoiceRecorder: {
      androidAudioSource: 'MIC',
      androidOutputFormat: 'MPEG_4',
      androidAudioEncoder: 'AAC',
      androidSampleRate: 16000,
      androidBitRate: 32000,
    }
  }
};

export default config;