// --- ACTIVARE SERVICE WORKER (PENTRU MODUL OFFLINE) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ Service Worker activat cu succes! Aplicația merge și offline.'))
            .catch(err => console.error('❌ Eroare la activarea Service Worker: ', err));
    });
}
// Adaugă asta în offline.js sau la finalul script-urilor din fiecare pagină
function actualizeazaIndicatorStare() {
    // Caută toate elementele care indică starea (pune clasa .dot-cloud sau .dot)
    const puncte = document.querySelectorAll('.dot, .dot-cloud');
    const esteOnline = navigator.onLine;

    puncte.forEach(punct => {
        if (esteOnline) {
            punct.style.background = '#2ecc71'; // Verde
            punct.style.boxShadow = '0 0 5px #2ecc71';
            // Dacă ai text, schimbă-l
            if (punct.parentElement.innerText.includes('OFFLINE')) {
                punct.parentElement.innerHTML = '<div class="dot-cloud"></div> CLOUD ONLINE';
            }
        } else {
            punct.style.background = '#e74c3c'; // Roșu
            punct.style.boxShadow = '0 0 5px #e74c3c';
            if (!punct.parentElement.innerText.includes('OFFLINE')) {
                punct.parentElement.innerHTML = '<div class="dot-cloud" style="background:#e74c3c;"></div> OFFLINE';
            }
        }
    });
}

// Ascultăm schimbările în timp real
window.addEventListener('online', actualizeazaIndicatorStare);
window.addEventListener('offline', actualizeazaIndicatorStare);

// Verificăm starea imediat la încărcare
window.addEventListener('load', actualizeazaIndicatorStare);
