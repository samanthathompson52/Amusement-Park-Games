# 🎡 Amusement Park Games

A collection of free, open-source, **browser-based party games**. No install, no login,
no build step — open one and play. Built to be hosted anywhere static files live
(GitHub Pages, Netlify, Vercel, or just a double-click).

## 🎮 Games

| Game | Description | Play |
| --- | --- | --- |
| 🙌 **[Heads Up!](./heads-up/)** | Hold the phone to your forehead and guess the word from your friends' clues. Ships with 10 ready-to-play card packs (338+ cards), tilt controls, a timer, and a build-your-own-deck feature. | [`/heads-up/`](./heads-up/) |

_More games get added to the park over time._

## 🚀 Play it

Once GitHub Pages is enabled for this repo, the games are live at:

- **Landing page:** `https://samanthathompson52.github.io/Amusement-Park-Games/`
- **Heads Up!:** `https://samanthathompson52.github.io/Amusement-Park-Games/heads-up/`

### Enable GitHub Pages

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute — your park is live at the URL above.

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
