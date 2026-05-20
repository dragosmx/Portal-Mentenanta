// --- ACTIVARE SERVICE WORKER (PENTRU MODUL OFFLINE) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ Service Worker activat cu succes! Aplicația merge și offline.'))
            .catch(err => console.error('❌ Eroare la activarea Service Worker: ', err));
    });
}
