/*
 * Amusement Park Games — service worker
 * -------------------------------------
 * Precaches the whole park (landing + every game and its data file) so it
 * installs to the home screen and plays with no connection. Cache-first with a
 * network fallback that caches new responses. Bump CACHE to ship an update.
 */
const CACHE = 'park-v3';

// Paths are relative to this file's location (the site root), so they work on
// the GitHub Pages subpath and on a custom domain alike.
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './heads-up/', './heads-up/index.html', './heads-up/packs.js',
  './spectrum/', './spectrum/index.html', './spectrum/cards.js',
  './bomb-party/', './bomb-party/index.html', './bomb-party/prompts.js',
  './would-you-rather/', './would-you-rather/index.html', './would-you-rather/prompts.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Add each item independently so one missing file can't fail the whole install.
    await Promise.all(SHELL.map(url => cache.add(url).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // don't touch cross-origin

  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      // Cache successful same-origin responses for next time (offline).
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    } catch (err) {
      // Offline and not cached — fall back to the landing page for navigations.
      if (req.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      throw err;
    }
  })());
});
