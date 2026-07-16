# 🎡 Amusement Park Games

A collection of free, open-source, **browser-based party games**. No install, no login,
no build step — open one and play. Built to be hosted anywhere static files live
(GitHub Pages, Netlify, Vercel, or just a double-click).

## 🎮 Games

| Game | Description | Play |
| --- | --- | --- |
| 🙌 **[Heads Up!](./heads-up/)** | Hold the phone to your forehead and guess the word from your friends' clues. Ships with 10 ready-to-play card packs (338+ cards), tilt controls, a timer, and build-your-own decks. | [`/heads-up/`](./heads-up/) |
| 🎯 **[Spectrum](./spectrum/)** | A pass-and-play take on *Wavelength*. One player gives a one-word clue for a hidden point on a spectrum; everyone else moves a dial to guess. Teams mode with bonus bets or co-op, a full circular dial, and 56 spectrum cards. | [`/spectrum/`](./spectrum/) |
| 💣 **[Bomb Party](./bomb-party/)** | Hot-potato word game for one phone. Say a word that fits the prompt (a letter fragment or a topic), then pass fast — whoever's holding it when the bomb blows loses. Adjustable fuse, ticking sound, and haptics. | [`/bomb-party/`](./bomb-party/) |
| 🤔 **[Would You Rather](./would-you-rather/)** | Tap through endless party prompts across four decks — Would You Rather, This or That, Never Have I Ever, and Most Likely To — with a live group-vote tally. | [`/would-you-rather/`](./would-you-rather/) |

_More games get added to the park over time._

## 🚀 Play it

Once GitHub Pages is enabled for this repo, the games are live at:

- **Landing page:** `https://samanthathompson52.github.io/Amusement-Park-Games/`
- **Heads Up!:** `https://samanthathompson52.github.io/Amusement-Park-Games/heads-up/`
- **Spectrum:** `https://samanthathompson52.github.io/Amusement-Park-Games/spectrum/`
- **Bomb Party:** `https://samanthathompson52.github.io/Amusement-Park-Games/bomb-party/`
- **Would You Rather:** `https://samanthathompson52.github.io/Amusement-Park-Games/would-you-rather/`

### 📲 Install &amp; play offline (PWA)

The park is a Progressive Web App: a [web manifest](./manifest.webmanifest) plus a
[service worker](./sw.js) precache the landing page and every game. Open the site once,
then use your browser's **Add to Home Screen** / **Install** option — after that it launches
full-screen and every game works with **no internet connection at all**. (Service workers
need HTTPS, which GitHub Pages provides automatically.)

### Enable GitHub Pages (one-time)

Deployment is automated by the [`Deploy to GitHub Pages`](.github/workflows/deploy-pages.yml)
workflow, which publishes the whole site on every push to `main`. GitHub only
lets a repository admin turn Pages on the first time, so this one step is manual:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it — no branch or folder to pick. Then push to `main` (or re-run the
workflow from the **Actions** tab) and ~1 minute later your park is live at the
URL above. Every later push to `main` redeploys automatically.

> Tilt/motion controls need **HTTPS**, which GitHub Pages provides automatically.

## 🛠️ Run locally

```bash
# any static server works
npx serve
# or
python3 -m http.server
```

Then open the printed URL. (Tap/keyboard controls work locally; phone tilt needs HTTPS.)

## ➕ Adding a game

Each game lives in its own folder with a self-contained `index.html`. Add a folder,
drop a card in the landing page (`index.html`) and the table above, and you're done.

## 📜 License

[MIT](./LICENSE). Individual games are independent, non-commercial fan projects and are
not affiliated with or endorsed by any trademarked product they resemble.
