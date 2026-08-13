# Deploying Northstar 🚀

Northstar is a **static site** — once built, it's just HTML/CSS/JS files with no
server or database. That means it can be hosted for **free** almost anywhere. This
guide gives you three paths, easiest first. Pick one.

> **The one command that matters:** `npm run build`
> It turns the `src/` code into a `dist/` folder of plain files. *That folder* is
> what every host below serves. Run it again whenever you change the app.

---

## Path A — Netlify Drop (fastest, ~60 seconds, no CLI) ⭐ try this first

1. Build it:
   ```bash
   npm run build
   ```
2. Go to **https://app.netlify.com/drop** in your browser.
3. Drag the **`dist`** folder (inside `northstar/`) onto the page.
4. Done — you get a live link like `https://random-name-123.netlify.app`.

To keep the link and get a nicer name, make a free Netlify account (the drop page
offers a "Claim this site" button). *You* create the account — enter your own details.

**Trade-off:** re-deploying means dragging the folder again. Great for a quick demo,
less great for ongoing updates. For that, use Path B.

---

## Path B — Vercel + GitHub (best for a resume) ⭐ recommended long-term

This gives you a clean URL **and** auto-redeploys every time you push code. It also
puts your code on GitHub, which recruiters like to see next to a live demo.

### 1. Put the code on GitHub
```bash
cd northstar
git init
git add .
git commit -m "Northstar: vision board + goal tracker"
```
Create an **empty** repo at https://github.com/new (name it `northstar`), then:
```bash
git remote add origin https://github.com/<your-username>/northstar.git
git branch -M main
git push -u origin main
```
> The push will ask you to sign in to GitHub — that part is yours to do.

### 2. Connect it to Vercel
1. Sign up at **https://vercel.com** with your GitHub account (free "Hobby" plan).
2. Click **Add New → Project**, pick your `northstar` repo, click **Import**.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. ~30 seconds later you get `https://northstar-xxxx.vercel.app`.

**From now on:** `git push` → Vercel rebuilds and updates the site automatically.
That's the whole workflow professional teams use, in miniature.

---

## Path C — GitHub Pages (free, lives in your GitHub)

Do Path B step 1 first (get the code on GitHub). Then:

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add these two lines to the `"scripts"` block in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
4. In your GitHub repo → **Settings → Pages**, set the source to the **`gh-pages`**
   branch. Your site appears at `https://<your-username>.github.io/northstar/`.

> This already works because `vite.config.js` uses `base: './'` (relative paths),
> so the app loads correctly from the `/northstar/` subpath. Run `npm run deploy`
> again anytime to update.

---

## Which should you choose?

| If you want… | Use |
|---|---|
| A link in 60 seconds, no accounts | **Netlify Drop** (A) |
| A polished portfolio setup with auto-deploy | **Vercel + GitHub** (B) |
| Everything inside your GitHub profile | **GitHub Pages** (C) |

For a resume, **Path B** is the strongest: recruiters can click the live demo *and*
read the code and your [`LEARNING.md`](./LEARNING.md) case study in the same place.

---

## What you're learning here (the concepts)

- **Build step:** source code (`src/`) → optimized static files (`dist/`). This is
  what "compiling a frontend" means in practice.
- **Static hosting:** no backend needed because Northstar stores data in the browser
  (`localStorage`). This is why hosting is free and simple.
- **Continuous deployment (Path B):** connecting Git to a host so a `git push`
  automatically ships your change. This is the core of modern web workflows.
- **Relative base path:** `base: './'` makes the site portable across any host or
  subpath — a common gotcha the first time people deploy a Vite/React app.
