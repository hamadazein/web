# 005 - Forms & Interactivity

Tailwind CSS menyediakan utilitas lengkap untuk men-styling form controls dan menambahkan interaktivitas ringan. Materi ini membahas prinsip aksesibilitas, state management, dan integrasi dengan JavaScript minimal.

## 🎯 Tujuan Pembelajaran

- Menstyling input, select, checkbox, radio, dan textarea secara konsisten
- Mengelola state fokus, validasi, error, dan disabled
- Membuat form layout responsif dengan grid dan flex
- Menambahkan feedback visual (success/error) tanpa CSS custom panjang
- Mengintegrasikan Tailwind dengan Alpine.js atau vanilla JS untuk interaksi ringan

## 🧠 Poin Penting

1. **Form Reset**  
   Tailwind tidak mengatur ulang style form, jadi gunakan classes seperti `appearance-none`, `focus-visible:ring`, dll.

2. **Aksesibilitas**  
   Gunakan label, `aria-describedby`, dan ring fokus agar form tetap accessible.

3. **Validation Feedback**  
   Manfaatkan state variants seperti `invalid:`, `valid:`, `focus:` untuk memberi highlight instan.

4. **Form Layout Patterns**  
   Kombinasikan `grid`, `gap`, `md:grid-cols-2`, `sm:gap-x-8` untuk layout kompleks.

5. **Interactivity**  
   Tambahkan feedback menggunakan Alpine.js atau event listener minimal.

## 🔍 Aktivitas di Demo

- Mengatur form registrasi dengan validation states
- Membuat input dengan icon menggunakan `relative` dan `pl-10`
- Mengatur toggle switch menggunakan `peer` variant
- Menampilkan alert menggunakan data binding sederhana

## 🔗 Referensi Lanjutan

- [Form Styling Guide](https://tailwindcss-forms.vercel.app/) (plugin resmi)
- [Aria & Accessibility](https://tailwindcss.com/docs/hover-focus-and-other-states#arbitrary-variants)
- [Tailwind UI Forms](https://tailwindui.com/components/application-ui/forms/overview)

Setelah materi ini, lanjutkan ke materi 006 untuk mempelajari customisasi Tailwind dan theming.
