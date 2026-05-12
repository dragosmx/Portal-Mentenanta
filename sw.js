const CACHE_NAME = 'killer-mentenanta-v1';
const urlsToCache = [
    './',
    './index.html',
    './view.html',
    './edit.html',
    './logo.png',
    './harta.jpg'
];

// Instalarea Service Worker-ului
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Fișiere salvate în cache (pentru viteză).');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptarea cererilor (Dacă nu e net, arată ce are în cache)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});