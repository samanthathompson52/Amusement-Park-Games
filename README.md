# 🎡 Amusement Park Games

A collection of free, open-source, **browser-based party games**. No install, no login,
no build step — open one and play. Built to be hosted anywhere static files live
(GitHub Pages, Netlify, Vercel, or just a double-click).

## 🎮 Games

| Game | Description | Play |
| --- | --- | --- |
| 🙌 **[Heads Up!](./heads-up/)** | Hold the phone to your forehead and guess the word from your friends' clues. Ships with 10 ready-to-play card packs (338+ cards), tilt controls, a timer, build-your-own decks, and ✨ AI-generated decks (describe any category and Claude writes the cards). | [`/heads-up/`](./heads-up/) |

_More games get added to the park over time._

## 🚀 Play it

Once GitHub Pages is enabled for this repo, the games are live at:

- **Landing page:** `https://samanthathompson52.github.io/Amusement-Park-Games/`
- **Heads Up!:** `https://samanthathompson52.github.io/Amusement-Park-Games/heads-up/`

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
