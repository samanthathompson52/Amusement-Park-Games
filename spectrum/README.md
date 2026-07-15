# Spectrum 🎯

A free, open-source **pass-and-play** party game for one phone, inspired by the board
game *Wavelength*. A hidden **target** sits somewhere on a spectrum between two opposites
(e.g. *Cold ←→ Hot*). One player — the **Psychic** — secretly sees where it is and gives a
one-word clue. Everyone else discusses and moves the **dial** to where they think it points.
The closer the needle lands, the more points you score. No app store, no login, no build
step — open it and play.

## ✨ Features

- **Two ways to play, chosen at the start:**
  - **Teams** — Team Violet vs Team Gold race to a target score (7 / 10 / 15). The team
    that *isn't* guessing places a **Left/Right bonus bet** on the true target for a chance
    at +1, exactly like Wavelength's classic mechanic.
  - **Party / co-op** — one shared score over a set number of rounds (5 / 7 / 10), then a
    rating band for the whole group.
- **Semicircular dial** with a draggable needle (drag, arrow-key nudge, or tap-to-set),
  a colour-graded track between the two poles, and a five-band scoring wedge.
- **Privacy-first hand-off** — the target is only ever shown to the Psychic on the clue
  screen; a "pass the phone" gate keeps guessers from peeking.
- **56 spectrum cards** built in, shuffled fresh every game.
- Sound cues, haptic vibration, and a screen wake-lock so the display stays on mid-round.
- **End game early** any time from the reveal screen.
- **Zero dependencies, zero build** — just static `index.html` + `cards.js`.

## 🚀 Play it

Because it's plain static files, you can play it several ways:

- **Open locally:** double-click `index.html`.
- **Serve locally:** `npx serve spectrum` or `python3 -m http.server` then open the folder.
- **Host it free:** drop the `spectrum/` folder on GitHub Pages, Netlify, or Vercel.

## 🎮 How to play

1. Gather 2–12 players and pick a mode. Split into two teams, or play co-op.
2. Pass the phone to the **Psychic** and tap **Reveal the target** — only they should look.
3. The Psychic sees the highlighted zone and says a **single word** that points to it
   (no gestures, don't touch the dial), then hands the phone to the guessers.
4. The group discusses the clue and **drags the needle** to where they think the target is,
   then locks it in.
5. **Teams mode:** the other team bets whether the real target is **Left** or **Right** of
   that guess for a bonus point.
6. The target is revealed and points are scored by how close you landed
   (**bullseye 4 · 3 · 2 · miss 0**). Pass the phone and play on until someone hits the
   target score — or the round count runs out.

## 🎴 Adding your own spectrum cards

Open [`cards.js`](./cards.js) and add a pair anywhere in the list:

```js
{ left: 'Underrated', right: 'Overrated' }
```

`left` is the 0 end of the dial, `right` is the 100 end. No build step — the file is loaded
as a plain global (`window.SPECTRUM_CARDS`) before the game.

## 📁 Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire game — UI, the SVG dial, logic, and styling. |
| `cards.js` | The spectrum card pairs. Edit here to change or add prompts. |

## 📜 License & credits

Released under the repository's MIT license. *Wavelength* is a trademark of its respective
owner; this is an independent, non-commercial fan project built for fun and learning and is
**not affiliated with or endorsed by** any commercial product.
