# ✦ Nova — your pop-star era

**A vision board *and coach* for aspiring musicians.** Capture what inspires you, pick
your creator type, and Nova maps a personalized path to your first break — with goals you
can actually track.

### ▶ [Live demo → nova-7iqn.vercel.app](https://nova-7iqn.vercel.app)

![type: web + mobile](https://img.shields.io/badge/type-web%20%2B%20mobile-7c3aed) ![web: React + Vite PWA](https://img.shields.io/badge/web-React%20%2B%20Vite%20PWA-c026d3) ![mobile: Expo / React Native](https://img.shields.io/badge/mobile-Expo%20%2F%20React%20Native-db2f9e) ![no AI](https://img.shields.io/badge/AI-none%20(by%20design)-a78bfa)

---

## The bet

Young creators don't fail for lack of dreams — they fail for lack of a clear, personalized
**path**. Generic goal apps feel like homework; vision boards look pretty but never move.
**Nova closes the gap between "I want to blow up" and "here's my next concrete step."**

Full product thinking behind it → [`LEARNING.md`](./LEARNING.md) (PM case study).
How it would scale to millions → [`SYSTEM_DESIGN.md`](./SYSTEM_DESIGN.md).

## What's in this repo

| Folder | What | Stack |
|--------|------|-------|
| **`/` (root)** | Web app (Pinterest-style board, dashboard, path engine) | React + Vite, installable **PWA** |
| **[`/mobile`](./mobile)** | Native iOS + Android app | **Expo / React Native** |
| [`LEARNING.md`](./LEARNING.md) | Product case study (personas, RICE, North Star, roadmap) | — |
| [`SYSTEM_DESIGN.md`](./SYSTEM_DESIGN.md) | Multi-platform architecture at scale (sync, API, data model) | — |
| [`DEPLOY.md`](./DEPLOY.md) | How to deploy the web app | — |

## Features

- **My Path** — pick your creator archetype (🎬 Reels · 🎸 Acoustic · 🎹 Instrumentalist · 🎧 EDM · 🎼 Composer · 🎤 Cover) → get a tailored **roadmap**, growth levers, and next steps you can turn into tracked goals in one tap. *(A rules-based recommender — no AI: consistent, offline, reviewable.)*
- **Vision board** — masonry board of ideas (lyrics, looks, dream shows); auto-gradient covers so it never looks empty.
- **Goals + North Star** — measurable goals with progress bars, and a single **North Star metric** (average progress) that tells you if your come-up is trending up.
- **Made for the audience** — Olivia Rodrigo–inspired palette (SOUR lilac + GUTS bruise-purple), **dark mode**, installable as an app.
- **Zero friction** — no login, no backend; saves on-device.

## Run the web app

```bash
npm install
npm run dev
```

## Run the mobile app

```bash
cd mobile
npm install
npx expo start
```
Then scan the QR code with **Expo Go** on your phone. Details in [`mobile/README.md`](./mobile/README.md).

## Tech at a glance

- **Web:** React 18, Vite, hand-written CSS design system, `vite-plugin-pwa`, `localStorage`.
- **Mobile:** Expo (React Native 0.74), Context + `useReducer`, `AsyncStorage`, custom tab nav.
- **Shared:** the same rules-based path engine and North Star logic across both clients.

No AI, no external APIs, no tracking — a focused, self-contained product.
