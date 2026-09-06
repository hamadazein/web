# Weblab — Belajar. Coba. Tumbuh.

Ruang belajar pengembangan web dalam bahasa Indonesia, dikembangkan dari materi [hamadazein/web](https://github.com/hamadazein/web). Pelajari **117 materi** melalui empat jalur: HTML, CSS, Tailwind CSS, dan Bootstrap. Tanpa akun dan tanpa backend.

## Jalankan lokal

Membutuhkan Node.js 22 atau lebih baru untuk alat pengembangan.

```bash
npm ci
npm run build
npm start
```

Buka **http://localhost:4173**. File aset yang sudah dibangun ikut disertakan dalam repositori, sehingga server statis lain juga dapat digunakan. Buka melalui HTTP, bukan dengan mengklik file HTML langsung, karena aplikasi memuat modul dan materi lokal.

## Pengalaman belajar

- **Beranda interaktif** dengan demo kode dan pilihan warna pratinjau.
- **Katalog materi** dengan pencarian, filter jalur, dan pemuatan daftar bertahap.
- **Pembaca materi** dengan Markdown yang disanitasi, gambar dan tautan lokal, tabel, salin kode, mode fokus, serta materi sebelumnya/berikutnya.
- **Progres dan bookmark** tersimpan di browser. Lanjut belajar menuju materi yang belum diselesaikan. Penyimpanan yang diblokir tetap memungkinkan belajar selama sesi berjalan.
- **Playground HTML/CSS** dengan tiga eksperimen, pilihan tab kode, pratinjau desktop/ponsel, draft otomatis, konfirmasi reset, dan unduh file HTML.
- **Kenyamanan akses**: navigasi keyboard, tautan lewati navigasi, pengaturan teks besar, reduced motion, menu ponsel, dan status yang terbaca pembaca layar.
- **Materi asli** beserta contoh proyek Grid/Flexbox dan Tailwind tetap tersedia. URL landing CSS, Bootstrap, dan Tailwind lama mengarah ke jalur barunya.

Progres dan draft bersifat lokal pada browser/perangkat ini, belum disinkronkan antarperangkat. Pratinjau playground menggunakan iframe sandbox; skrip dan sumber eksternal dibatasi. File unduhan dapat dibuka sebagai HTML biasa.

## Tipografi

```css
body {
  font-family:
    "OpenAI Sans",
    "Inter",
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;
}
```

Inter variable Latin disertakan secara lokal, lengkap dengan lisensinya. OpenAI Sans hanya digunakan melalui `local()` jika font tersebut sudah terpasang; repositori ini tidak menyertakan file font proprietary tersebut. Font menggunakan `font-display: swap`.

## Struktur

```text
index.html                 Titik masuk aplikasi
style.css                  Sistem tampilan dan responsivitas
assets/js/                 Navigasi, tampilan, reader, playground, dan state
assets/data/catalog.json   Katalog yang dihasilkan dari materi asli
assets/fonts/              Inter beserta lisensi
assets/vendor/             Marked dan DOMPurify beserta lisensi
scripts/build.mjs          Pembentukan katalog dan penyalinan dependensi lokal
scripts/serve.mjs          Server statis pengembangan
tests/                     Pengujian data, alur pengguna, dan aksesibilitas
000 Definisi HTML/ …       Sumber materi HTML
CSS-Materials/             Sumber materi CSS
Tailwind-Materials/        Sumber materi dan contoh Tailwind v3
Bootstrap-Materials/       Sumber materi dan contoh Bootstrap
```

Tambahkan atau edit README materi pada folder bernomor yang sesuai, kemudian jalankan `npm run build`. Generator mempertahankan kapitalisasi nama file, mengategorikan materi `013 HTML CSS` ke HTML, dan mengambil satu versi materi Tailwind 007 yang duplikat.

## Verifikasi

```bash
npm test
npx playwright install chromium
npm run test:e2e
npm run format:check
```

Pengujian mencakup progres, bookmark, data rusak, storage terblokir, pencarian, keyboard, preferensi, sanitasi Markdown, pemulihan kegagalan jaringan, gambar/tautan lokal, URL lama, dan hosting di subpath. Reflow diuji pada 320, 390, 768, 1024, dan 1440 piksel. Axe memeriksa permukaan aplikasi; konten buatan pembelajar di dalam sandbox tidak disertakan dalam audit otomatis host.

Dengan server lokal berjalan, `npm run screenshots` menghasilkan gambar desktop/ponsel dan ringkasan audit di `artifacts/`.

## Hosting statis

Root repositori dapat diunggah ke hosting statis atau GitHub Pages. Pertahankan folder materi, `assets/`, `index.html`, `style.css`, dan `.nojekyll`. Routing menggunakan hash (`#/lesson/html-000`), sehingga tidak memerlukan konfigurasi rewrite dan tetap bekerja pada subpath seperti `/web/`.

Untuk GitHub Pages, setelah perubahan di-push, pilih branch dan folder root pada pengaturan Pages repositori. Pengerjaan lokal ini tidak otomatis menerbitkan situs.

## Catatan materi

Isi pelajaran mengikuti sumber yang sudah ada di repositori. Peningkatan ini berfokus pada akses dan pengalaman belajar; seluruh tutorial belum direvisi untuk mengikuti versi framework terbaru. Materi Tailwind yang ada menggunakan pendekatan v3.
