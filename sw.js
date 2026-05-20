const CACHE_NAME = 'killer-mentenanta-v2';

// ⚠️ Am adăugat librăriile externe. Fără ele, HTML-ul se încarcă degeaba offline.
const urlsToCache = [
    './',
    './index.html',
    './view.html',
    './edit.html',
    './logo.png',
    './harta.jpg',
    './manifest.json',
    'https://unpkg.com/html5-qrcode',
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js',
    'https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js',
    'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage-compat.js'
];

// Instalarea Service Worker-ului
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Fișiere salvate în cache (inclusiv librăriile).');
                return cache.addAll(urlsToCache);
            })
    );
});

// Ștergem cache-ul vechi (v1) ca să nu ocupe memorie aiurea
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                          .map(name => caches.delete(name))
            );
        })
    );
});

// Interceptarea cererilor (Network First, fallback to Cache)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
