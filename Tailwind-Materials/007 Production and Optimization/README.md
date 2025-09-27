# 007 - Production & Optimization

Materi terakhir membahas strategi menerapkan Tailwind CSS di lingkungan production. Fokus pada optimasi bundle, otomatisasi build, integrasi dengan framework modern, dan monitoring performa.

## 🎯 Tujuan Pembelajaran

- Mengkonfigurasi Tailwind CLI / PostCSS untuk proses build
- Memanfaatkan purge (content scanning) guna mengecilkan CSS output
- Mengintegrasikan Tailwind dengan bundler modern (Vite, Next.js, Laravel Mix)
- Menggunakan safelist dan strategi dynamic class yang aman
- Mengotomasi minifikasi, autoprefixer, dan cache busting

## 🔧 Materi Utama

1. **Workflow Build**  
   Setup Tailwind CLI, script `build` & `watch`, serta integrasi dengan bundler.

2. **Content Scanning**  
   Mengonfigurasi array `content` agar hanya kelas yang digunakan yang masuk bundle.

3. **Performance Metrics**  
   Mengukur ukuran CSS, Time to Interactive, dan Core Web Vitals.

4. **Deployment Checklist**  
   Praktik caching, prefetch, compression, dan strategi CDN.

5. **Monitoring**  
   Menjaga konsistensi setelah rilis menggunakan analitik dan error tracking.

## 🧪 Aktivitas di Demo

- Menjalankan script build Tailwind CLI
- Menguji output production vs development
- Menggunakan `@apply` dan safelist tanpa terhapus purge
- Checklist deployment production-ready

## 🔗 Referensi Penting

- [Optimizing for Production](https://tailwindcss.com/docs/optimizing-for-production)
- [Using Tailwind CLI](https://tailwindcss.com/docs/installation)
- [Best Practices](https://tailwindcss.com/blog/building-the-tailwind-css-community)

Selamat! Setelah menyelesaikan materi ini, Anda siap menggunakan Tailwind CSS secara profesional di proyek apa pun.
