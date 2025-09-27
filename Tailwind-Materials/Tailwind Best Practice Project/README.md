# Tailwind Best Practice Project

Proyek akhir ini men-demonstrasikan implementasi Tailwind CSS yang profesional, lengkap dengan dark/light mode, komponen aksesibel, dan performa optimal. Gunakan proyek ini sebagai referensi untuk menstrukturkan aplikasi nyata.

## ✨ Fitur Utama

- **Hero landing page responsif** dengan CTA ganda dan statistik
- **Dark/Light mode toggle** yang menyimpan preferensi pengguna di `localStorage`
- **Komponen reusable** dengan utility stacks langsung di markup + lapisan kustom ringan untuk helper global
- **Section fitur, pricing, testimonial, blog, dan FAQ** yang memanfaatkan Tailwind plugins
- **Form kontak dengan validasi ringan** & feedback status
- **Animasi subtle** menggunakan `transition`, `transform`, dan `animate` utilities
- **Optimisasi performa**: meminimalkan class dinamis, menambahkan `prefers-reduced-motion`

## 📁 Struktur Proyek

```
Tailwind Best Practice Project/
├── index.html
├── assets/
│   └── logos.svg
├── styles/
│   └── tailwind.css
└── scripts/
    └── main.js
```

> Catatan: File `tailwind.css` berisi direktif `@tailwind` dan custom layer untuk demonstrasi. Jika ingin build production, jalankan Tailwind CLI untuk mengkompilasi file CSS final.

## 🚀 Cara Menggunakan

1. Buka `index.html` langsung di browser untuk melihat versi CDN (prototyping mode).
2. Untuk workflow production:
   ```powershell
   # Install dependencies (opsional jika ingin build)
   npm install -D tailwindcss postcss autoprefixer

   # Generate config
   npx tailwindcss init -p

   # Build CSS
   npx tailwindcss -i ./styles/tailwind.css -o ./dist/main.css --minify
   ```
3. Update tag `<link>` di `index.html` agar menunjuk ke `dist/main.css` hasil build.

## 🧠 Best Practice yang Ditunjukkan

- Menyusun section dengan `container`, `max-w-*`, dan `space-y` yang konsisten
- Mempertahankan prototyping CDN-only dengan meng-inline utility stack untuk tombol & kartu hero
- Mengelola state dengan data attribute (FAQ accordion) + class `data-[state=open]`
- Menerapkan accessibility: semantic HTML, focus ring, `aria-expanded`, `aria-controls`
- Menyediakan fallback untuk user dengan `prefers-reduced-motion`

## 🔗 Referensi

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Tailwind UI Inspiration](https://tailwindui.com/)
- [Headless UI](https://headlessui.dev/)

Selamat bereksperimen dan adaptasi proyek ini untuk kebutuhan Anda! 💡
