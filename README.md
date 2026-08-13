# ✦ Nova

**Turn inspiration into measurable goals.** A Pinterest-style vision board that doesn't stop at pretty pictures — it connects the things that inspire you to goals you can actually track.

![type: web app](https://img.shields.io/badge/type-web%20app-e0115f) ![stack: React + Vite](https://img.shields.io/badge/stack-React%20%2B%20Vite-c026d3) ![storage: local, no account](https://img.shields.io/badge/storage-local%20%C2%B7%20no%20account-ff7a59)

---

## Why this exists (the product bet)

Vision boards are great at capturing *aspiration* but terrible at driving *action*. Habit trackers are great at action but feel joyless. **Nova's bet is that the gap between "I'm inspired" and "I'm making progress" is where most personal goals die** — so it puts inspiration and measurement in the same place.

That single insight drives every feature decision. See [`LEARNING.md`](./LEARNING.md) for the full product case study.

## Features

- **Boards** — organize inspiration into themed collections (Career, Travel, Health…).
- **Ideas (pins)** — a masonry board of images, notes, links, and tags. No image? Nova auto-generates a soft gradient cover, so the board never looks broken.
- **Goals** — attach measurable goals to any board: a metric, a current/target value, a due date, and checklist milestones. Live progress bars.
- **Dashboard with a North Star metric** — one number (average progress across all goals) that tells you if the whole vision is trending up, plus deadlines and per-board summaries.
- **Search** across ideas and goals.
- **Zero friction** — no login, no backend. Everything saves to your browser via `localStorage`.

## Run it

```bash
cd northstar
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Build a production bundle with `npm run build` and preview it with `npm run preview`.

## Tech

| Area | Choice | Why |
|------|--------|-----|
| Framework | React 18 + Vite | Fast dev loop, tiny footprint, no config |
| State | `useReducer` + `localStorage` | Predictable actions, persistent, no backend needed |
| Styling | Hand-written CSS | Full control of the Pinterest-style masonry & motion |
| Layout | CSS `columns` masonry + `conic-gradient` progress ring | No chart/layout libraries |

No AI, no external APIs, no tracking. It's a focused, self-contained product.

## Project structure

```
northstar/
├─ index.html
├─ src/
│  ├─ main.jsx            # entry
│  ├─ App.jsx             # shell, routing-by-state, handlers
│  ├─ store.js            # reducer, seed data, localStorage hook
│  ├─ index.css           # full design system
│  └─ components/
│     ├─ Dashboard.jsx    # North Star metric + summaries
│     ├─ PinCard.jsx      # masonry tile
│     ├─ GoalCard.jsx     # progress + milestones
│     ├─ Modal.jsx        # reusable dialog
│     ├─ PinModal.jsx     # add/edit idea
│     ├─ GoalModal.jsx    # add/edit goal
│     └─ BoardModal.jsx   # add/edit board
└─ LEARNING.md            # product case study (the resume piece)
```
