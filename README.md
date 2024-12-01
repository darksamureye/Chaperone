# Installing the Debug APK

## Option 1: Direct Device Installation

1. Enable Developer Options on your Android device:
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times
   - Developer Options will appear in Settings

2. Enable USB Debugging:
   - Go to Settings > Developer Options
   - Enable "USB Debugging"

3. Connect your device via USB and run:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## Option 2: Manual Installation

1. Transfer the APK to your Android device:
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
   - Transfer via USB, email, or cloud storage

2. On your Android device:
   - Enable "Install from Unknown Sources" in Settings > Security
   - Navigate to the APK file
   - Tap to install

## Option 3: Using Android Studio

1. Open the android folder in Android Studio
2. Connect your device or start an emulator
3. Click "Run" (green play button)