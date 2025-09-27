# 004 - Components & Patterns

Setelah memahami layout, saatnya membangun komponen UI yang reusable menggunakan Tailwind CSS. Materi ini menunjukkan cara menyusun pola desain (design patterns) tanpa kehilangan fleksibilitas utility-first.

## 🎯 Tujuan Pembelajaran

- Membuat komponen umum (navbar, hero, card, testimonial) dengan Tailwind
- Memanfaatkan `@apply` untuk ekstraksi style saat dibutuhkan
- Mengorganisir komponen menggunakan partials atau template engine
- Menjaga konsistensi desain dengan design tokens dan Variants
- Memahami integrasi dengan Headless UI / Radix UI untuk komponen accessible

## 🧩 Fokus Materi

1. **Component Composition**  
   Menggabungkan utilitas Tailwind sehingga mudah di-extend tanpa CSS tambahan yang kompleks.

2. **Stateful Components**  
   Menangani state seperti hover, focus, open/close dengan `group` dan `peer` utilities.

3. **Design Tokens**  
   Mengelola warna, spacing, dan typography secara konsisten di seluruh komponen.

4. **Extraction Strategy**  
   Kapan menggunakan `@apply`, kapan tetap utility-first, dan bagaimana mendokumentasikannya.

5. **Accessibility-First**  
   Menggunakan struktur HTML semantik, fokus ring, dan aria attributes.

## 🔍 Aktivitas di Demo

- Membangun navbar responsif dengan dropdown
- Membuat kartu fitur dan testimonial menggunakan composition
- Menyusun CTA section dengan gradient dan glassmorphism
- Menulis helper class menggunakan `@layer components`

## 🔗 Referensi Penting

- [Reusing Styles](https://tailwindcss.com/docs/reusing-styles)
- [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Headless UI](https://headlessui.dev/)

Setelah menguasai komponen UI, lanjutkan ke materi 005 untuk mendalami styling forms dan interaktivitas.
