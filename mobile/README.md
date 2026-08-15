# 📱 Nova Mobile (Expo / React Native)

The native iOS + Android version of **Nova** — the vision-board & coach for aspiring
musicians. Built with **Expo** so it runs on a real phone in ~1 minute, no Xcode/Android
Studio required.

## What's inside

Three tabs, sharing the same rules-based **path engine** as the web app:

- **Home** — your **North Star** (average goal progress), quick stats, and "goals in motion" with live progress bars.
- **My Path** — pick your creator archetype (Reels singer, acoustic, instrumentalist, EDM producer, composer, cover artist) → get a tailored roadmap, growth levers, and next steps you can **Track** with one tap (they become goals).
- **Goals** — log progress with − / + and watch your North Star update instantly.

State persists on-device with **AsyncStorage** (the mobile equivalent of the web app's `localStorage`).

## Run it on your phone (fastest)

1. Install the **Expo Go** app from the App Store / Play Store.
2. From this folder:
   ```bash
   cd mobile
   npm install
   npx expo start
   ```
3. Scan the QR code in the terminal with your phone (Camera on iOS, Expo Go on Android).

The app opens instantly in Expo Go and hot-reloads as you edit.

## Run in a simulator (optional)

```bash
npx expo start --ios       # requires Xcode (macOS)
npx expo start --android   # requires Android Studio + an emulator
```

## Tech

| Area | Choice | Why |
|------|--------|-----|
| Framework | Expo (React Native 0.74) | One codebase → iOS + Android, runs via Expo Go with zero native setup |
| Navigation | Custom tab bar (state-driven) | Dependency-light and predictable; no native nav config to break |
| State | React Context + `useReducer` | Same predictable-actions pattern as the web app |
| Storage | `@react-native-async-storage/async-storage` | On-device persistence, no backend |

## How this relates to the web app & backend

Web (`../`) and mobile (this folder) are two **clients** of the same product. In a
production build they'd share a backend and a real-time sync layer — see
[`../SYSTEM_DESIGN.md`](../SYSTEM_DESIGN.md) for the full multi-platform architecture.
