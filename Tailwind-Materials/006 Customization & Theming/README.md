# 006 - Customization & Theming

Materi ini membahas cara mengkustomisasi Tailwind CSS agar sesuai dengan brand identity dan kebutuhan proyek Anda. Fokusnya pada konfigurasi `tailwind.config.js`, membuat design tokens, menambahkan plugin, dan mengelola mode warna.

## 🎯 Tujuan Pembelajaran

- Mengonfigurasi `tailwind.config.js` untuk colors, fonts, spacing, dan extend lainnya
- Membuat design tokens dan shared styles menggunakan `@layer`
- Mengaktifkan dan mengonfigurasi dark mode & multi-theme
- Menggunakan plugin resmi (typography, forms, line-clamp) dan plugin custom
- Men-setup mode JIT dan safelist untuk dynamic class

## 🔧 Materi Utama

1. **Extend & Override**  
   Mempelajari struktur konfigurasi Tailwind, cara extend vs override, dan penamaan custom.

2. **Design Tokens**  
   Membuat palet warna dan scale spacing khusus yang konsisten.

3. **Multi Theme**  
   Menambahkan tema gelap, terang, dan mungkin tema tambahan menggunakan data attributes.

4. **Plugins**  
   Menambahkan plugin resmi dan menulis plugin sederhana untuk utilitas kustom.

5. **Safelist & JIT**  
   Memastikan kelas dinamis tidak terhapus saat proses purge.

## 🔍 Aktivitas di Demo

- Mendefinisikan tema warna kustom
- Implementasi toggle tema (light/dark/sistem)
- Membuat custom utility (glassmorphism) via `@layer utilities`
- Memakai plugin typography untuk konten artikel

## 🔗 Referensi Penting

- [Configuration](https://tailwindcss.com/docs/configuration)
- [Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
- [Plugins](https://tailwindcss.com/docs/plugins)

Setelah menguasai kustomisasi, lanjutkan ke materi 007 untuk optimasi dan deployment production.
