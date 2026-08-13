# Northstar — Product Case Study & Learning Doc

> How I thought about **Northstar** as a *product*, not just an app.
> Read this alongside the live demo — it's written like a real product one-pager +
> decision log, so you can see the reasoning, not just the result.

**Author:** Sujith Suresh · **Role I'm playing:** Product owner + builder · **Timebox:** portfolio project

---

## 1. TL;DR (the 30-second version)

**Northstar is a vision board *and coach* for aspiring musicians.** It helps a bedroom
artist turn inspiration into measurable goals — and then tells them, based on the *kind*
of creator they are (Reels singer, acoustic songwriter, instrumentalist, EDM producer,
composer, cover artist), exactly what their path to a first break looks like and what to
do next.

The core bet: **young creators don't fail for lack of dreams — they fail for lack of a
clear, personalized path.** Northstar closes the gap between *"I want to blow up"* and
*"here's my next concrete step,"* and makes progress visible with a single North Star metric.

Built with React + Vite, local-first (no accounts), installable as a PWA, and — deliberately
— **no AI**. The personalization is a hand-authored, rules-based recommender.

---

## 2. The problem & the insight

**Problem.** Millions of Gen-Z creators want to make it in music. They have talent and a
phone, but their dreams live as a chaotic mess of screenshots, half-finished demos, and
vague ambition. Generic goal apps feel like homework; vision boards look pretty but never
move; and "how to blow up" advice online is one-size-fits-all noise.

**Why existing tools don't solve it:**

| Tool type | Good at | Fails the aspiring musician at |
|-----------|---------|--------------------------------|
| Vision boards (Pinterest) | Capturing aspiration & aesthetic | No progress, no accountability, no *plan* |
| Goal trackers (Notion, Streaks) | Measurement | Cold and generic; no music-specific guidance |
| "How to grow" content (YouTube) | Inspiration & tips | Not personalized, not tracked, not actionable *today* |

**The insight (the wedge):** the drop-off happens in the handoff between *inspiration →
plan → measurable action*. No tool owns that handoff **for a specific type of creator.**
A Reels singer and an EDM producer need completely different playbooks — and nobody hands
them one that's tied to their own tracked goals. **Northstar puts inspiration, a
personalized path, and a progress metric in the same place.**

---

## 3. The pivot (customer focus in action)

This project started as a *generic* vision board — career, travel, health, home. It was
clean, but it was a vitamin, not a painkiller: it competed with Pinterest and Notion and
beat neither.

**I narrowed to a sharp, underserved audience — aspiring musicians / Gen-Z pop-star
hopefuls** — and the product got dramatically stronger:

- The value prop went from *"track your dreams"* (nice) to *"get your first break"* (urgent).
- It unlocked the headline feature — the **path engine** — which only makes sense for a
  well-defined audience.
- It gave the whole thing a point of view and an aesthetic (Olivia Rodrigo–inspired:
  SOUR lilac + GUTS bruise-purple, butterflies, diary energy) that a generic tool can't have.

**Lesson I'm demonstrating:** *a smaller, specific audience you deeply understand beats a
large, vague one.* Narrowing is a product decision, not a retreat.

---

## 4. Who it's for (users & JTBD)

**Primary persona — "Aria, the bedroom artist" (19).** Makes music on her phone/laptop,
posts covers and clips, dreams of doing this full-time. Overwhelmed by *what to actually do
next.* Motivated by momentum and identity, not spreadsheets.

Because "musician" isn't one persona, Northstar models **creator archetypes** as
first-class users — each with its own path, platforms, cadence, and success metric:

🎬 Reels Singer · 🎸 Acoustic Singer-Songwriter · 🎹 Instrumentalist · 🎧 EDM Producer ·
🎼 Song Composer / Original Artist · 🎤 Cover Artist

**Jobs To Be Done:**
- *When* I'm inspired, *I want to* capture the lyric/look/dream show, *so I can* keep the fire alive.
- *When* I don't know what to do next, *I want to* see a clear path for **my kind** of artist, *so I can* stop guessing and act.
- *When* I check in, *I want to* see one honest signal of momentum, *so I can* keep going or refocus.

**Explicit non-users (scoping is a product skill):** established/label artists, bands
needing collaboration, and anyone wanting a full DAW or distribution tool. Northstar is a
**single-player planning & motivation** layer, not a studio.

---

## 5. Product principles (my decision filter)

1. **Identity first.** It should feel like *your era*, not a productivity app. Emotion, then metrics.
2. **Always give a next step.** Inspiration without a concrete action is where dreams die.
3. **Personalized > generic.** Advice tied to the user's archetype beats one-size-fits-all.
4. **One honest number beats ten vanity ones.** Hence a single North Star metric.
5. **Never look broken.** No image? Auto-gradient cover. First run? A lived-in demo board.
6. **Zero onboarding tax.** No login. Land in something real in 5 seconds.

---

## 6. Prioritization — how I chose what to build

Lightweight **RICE** (Reach × Impact × Confidence ÷ Effort), scores relative 1–10.

| Feature | Reach | Impact | Confidence | Effort | RICE-ish | Verdict |
|---|---|---|---|---|---|---|
| Local persistence | 10 | 7 | 10 | 2 | **350** | ✅ Shipped |
| Pins + boards (visual capture) | 10 | 9 | 10 | 4 | **225** | ✅ Shipped |
| **Path engine (archetype → roadmap + next steps)** | 9 | 10 | 8 | 5 | **144** | ✅ Shipped — the differentiator |
| Goals with progress bars | 9 | 10 | 9 | 4 | **203** | ✅ Shipped |
| North Star dashboard | 8 | 9 | 8 | 3 | **192** | ✅ Shipped |
| Dark mode | 8 | 5 | 9 | 3 | **120** | ✅ Shipped (audience expectation) |
| PWA / installable app | 7 | 6 | 8 | 3 | **112** | ✅ Shipped (mobile-first audience) |
| Search / filter | 7 | 5 | 9 | 2 | **158** | ✅ Shipped |
| Image upload from disk | 6 | 5 | 7 | 6 | 35 | ⏭ Later |
| Reminders / streaks | 8 | 8 | 6 | 8 | 48 | ⏭ Later |
| Multi-device sync (accounts) | 6 | 6 | 6 | 10 | 22 | ⏭ Later |
| Community / shared boards | 4 | 5 | 5 | 10 | 10 | ❌ Cut |
| AI "generate my plan" | 6 | 5 | 3 | 9 | 10 | ❌ Cut (see §8) |

**What this says about my judgment:** I invested effort where it created *differentiation*
(the path engine) and met *audience expectations* (dark mode, installable app), while
cutting expensive, low-confidence bets (sync, community, AI). *Cutting is the product
decision; building everything is not.*

**MoSCoW:** Must = capture + personalized path + measure + persist. Should = dark mode,
PWA, search. Could = image upload, streaks. Won't (yet) = accounts, community, AI.

---

## 7. The North Star metric & the metric tree

**North Star metric:** *Average progress across all of a creator's active goals* (a single %).
One number that answers *"is my come-up actually trending up?"*

I deliberately avoided vanity metrics (pins created, logins). A board with 200 pins and 0%
goal progress is *failing* the core job — and this metric says so.

**AARRR-style supporting tree I'd instrument at launch:**
- **Activation:** % of new users who pick an archetype **and** track ≥1 goal in session one (the real "aha").
- **Engagement:** weekly goal check-ins + revisits to the "My Path" page.
- **Retention:** week-2 return rate — the true test for a goals/coaching product.
- **North-Star driver:** % of goals whose progress increased week-over-week.

**The hypothesis the product is built to test:** users who **choose a path** convert next
steps into tracked goals and retain meaningfully better than users who only pin. If that's
true, personalization is the growth engine.

---

## 8. Key decisions & trade-offs (the interesting part)

**Decision 1 — A rules-based path engine, *not* AI.**
The obvious 2025 move is "let AI generate your plan." I chose a **hand-authored,
deterministic recommender** ([`paths.js`](src/paths.js)) instead.
*Trade-off:* less novel, doesn't adapt to free-text. *Why it wins here:* the advice is
**consistent, high-quality, instant, free to run, and works offline** — and for a young
audience, trustworthy specifics beat plausible-sounding generated fluff. It also keeps the
product legible: every recommendation is something I can defend. *Great product ≠ most tech.*

**Decision 2 — Narrow the audience (see §3).** Chose depth for aspiring musicians over
breadth for "everyone with goals."

**Decision 3 — `localStorage`, no accounts.**
*Trade-off:* no multi-device sync, but zero signup friction and a demo anyone opens in 5s.
For a concept-proving MVP, friction was the bigger risk than sync. A reversible, one-way-door-avoiding call.

**Decision 4 — Manual progress numbers, not integrations.**
Works for *any* goal (songs, shows, listeners, plays) without wiring up Spotify/TikTok APIs.
Keeps scope sane and the tool universal across archetypes.

**Decision 5 — Auto-gradient covers + a seeded demo board.**
Empty/first-run states are product surface, not edge cases. The default is a lived-in board,
so the app never greets you with a blank void.

**Decision 6 — Design as a feature.** Dark mode and the Olivia-inspired identity aren't
polish for its own sake — for this audience, *aesthetic is trust.* A tool that looks like a
2010 admin panel loses them before they read a word.

---

## 9. Roadmap (Now / Next / Later)

**Now (shipped)**
- Vision board (boards + masonry pins), goals with progress bars + milestones, North Star
  dashboard, **the archetype path engine** (roadmap, "how to make it big," trackable next
  steps, daily motivation), dark mode, installable PWA, search, local persistence.

**Next (highest-RICE deferred work)**
- **Streaks & weekly check-in nudges** — the retention lever for a habit-shaped audience.
- **Progress-triggered milestones on the path** ("you hit 5k followers → unlock the next phase").
- Image upload / paste, and export-import JSON (own your data without accounts).

**Later (needs validation first)**
- Accounts + sync (only once retention justifies the infra).
- More archetypes (rapper, band, worship, content-creator crossover) + sub-genre paths.
- Community: compare paths, share wins — powerful but heavy; gated behind proven retention.

Ordering is intentional: **prove that the path drives retention before building for scale.**

---

## 10. What I'd measure to call it a success

A 4-week beta with 50 aspiring musicians. Validated if:
- **≥ 65%** pick an archetype **and** track ≥1 goal in session one (activation), and
- **Week-2 retention ≥ 40%**, and
- Path-choosers retain **meaningfully better** than pin-only users (the core-bet test).

If path-choosers *don't* out-retain, the personalization thesis is wrong and I'd pivot
toward whichever half (capture vs. coaching) is doing the work.

---

## 11. What I learned

- **Narrowing is leverage.** The single highest-impact decision wasn't a feature — it was
  choosing *who this is for.* The generic version was fine; the specific one has a reason to exist.
- **The best tool isn't the most tech.** Choosing a rules-based engine over AI made the
  product better for its users. Knowing *when not* to use the shiny thing is product judgment.
- **A metric can encode a philosophy.** "Average goal progress" over "pins created" bakes
  the product's values into the first number people see.
- **Design and empty states are product surface, not decoration** — especially for a
  taste-driven Gen-Z audience.
- **Scope is the product.** RICE + MoSCoW did more for the outcome than any single feature;
  cutting AI, accounts, and community is why this shipped.

---

## 12. How I'd talk about this in an interview

> "Northstar is a vision board and coach for aspiring musicians. I started generic and
> **narrowed to Gen-Z bedroom artists**, which made the value prop urgent — *get your first
> break* instead of *track your dreams*. The headline feature is a **path engine**: you pick
> your creator archetype and get a tailored roadmap, growth levers, and next steps that turn
> straight into tracked goals. I deliberately built it as a **rules-based recommender, not AI**,
> because consistent, defensible, offline advice serves this audience better than generated
> fluff. I prioritized with RICE — cutting AI, accounts, and community — and chose a single
> North Star metric, average goal progress. My validation plan is a 4-week beta testing
> whether path-choosers out-retain pin-only users, since that's the bet the product rests on."

### Resume bullets you can lift

- **Repositioned** a generic vision-board app into **Northstar**, a vision-board-and-coach for
  aspiring musicians, sharpening the value prop from "track your dreams" to "get your first
  break" by narrowing to a specific, underserved Gen-Z audience.
- **Designed and shipped a rules-based personalization engine** that maps a creator's
  archetype (6 types) to a tailored roadmap, growth levers, and trackable next steps —
  choosing a deterministic recommender over AI for consistency, trust, and offline use.
- Scoped the MVP with **RICE** and **MoSCoW**, defined a single **North Star metric** with an
  **AARRR** supporting tree and an explicit retention hypothesis, and built it end-to-end
  (**React + Vite**, local-first, **installable PWA**, dark mode) with a designed onboarding,
  empty states, and a product one-pager + decision log.

---

*Appendix: the code lives beside this doc. Every decision above maps to something you can
click in the running app — that's the point.*
