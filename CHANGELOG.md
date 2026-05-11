# 📝 Jurnal de Dezvoltare (Changelog) - Killer CMMS
Proiect: Sistem Digital de Management al Mentenanței Enterprise
Lead Developer: Dragos Munteanu
Status: Versiunea 1.5.0 (Stabilă)

---

## [1.5.0] - 2026-05-11 (Actualizarea "Enterprise & Mobile")
### ✨ Funcționalități Noi
- **Flux Live Intervenții**: Modul de monitorizare în timp real. Afișează ultimele 20 de acțiuni tehnice într-un container cu scroll independent.
- **Export PDF Oficial**: Integrare `html2pdf` pentru rapoarte de stare (A4 Landscape), gata pentru audit.
- **Semnătură Vizuală**: Implementarea branding-ului "Developed by Dragos Munteanu • 2026" în toate interfețele.

### 🎨 Optimizări UI/UX
- **Control Zoom**: Repoziționare butoane în dreapta-jos pentru ergonomie pe tabletă.
- **Auto-Zoom Inteligent**: Calcul automat al limitelor (Bounds) pentru centrarea hărții pe utilajele din secția selectată.
- **Grilă QR**: Optimizare la 5 etichete pe rând pentru printare economică.

---

## [1.4.0] - 2026-05-10 (Actualizarea "Technical Insight")
### ⚙️ Modificări de Logică
- **Pivotare Mentenanță**: Eliminarea datelor financiare; focus 100% pe bife tehnice și mentenanță preventivă.
- **Tabel Pop-up**: Extinderea informației la click pe pin pentru a vedea ultimele 3 intervenții.
- **Logică Status**: Calcul precis al scadențelor: Verde (<30z), Galben (30-90z), Roșu (>90z).

---

## [1.3.0] - 2026-05-10 (Actualizarea "Data Sync")
### ☁️ Integrare Cloud
- **Firebase Realtime Database**: Sincronizare instantanee între scanarea din teren și panoul de control.
- **Persistență Date**: Salvarea istoricului în infrastructura securizată Google Cloud.

---

## [1.2.0] - 2026-05-09 (Actualizarea "Interactive Map")
### 🗺️ Vizualizare
- **Leaflet Simple CRS**: Adaptarea hărții pe imaginea JPG a fabricii.
- **Filtrare Secții**: Separarea utilajelor pe fluxuri: Tranșare, Injectare, Tocare, Fabricație.
- **Căutare Globală**: Identificare instantanee a utilajului pe hartă după ID sau Nume.

---

## [1.1.0] - 2026-05-09 (Actualizarea "QR Engine")
### 📲 Scanare
- **Modul Scan.html**: Crearea paginii de scanare cu camera telefonului.
- **Generator Automat**: Funcție de creare coduri QR unice pentru fiecare echipament.

---

## [1.0.0] - 2026-05-08 (Lansare Concept)
### 🚀 Prototip
- Definirea structurii de bază și a design-ului Dark Mode.
- Crearea formularului de input pentru mentenanță.