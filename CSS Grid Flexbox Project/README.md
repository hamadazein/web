# CSS Grid & Flexbox Website Project

Website responsif sederhana yang dibuat untuk pembelajaran CSS Grid dan Flexbox dengan desain minimalist.

## 📋 Fitur

- 4 Halaman utama (Beranda, Tentang Saya, Kontak, Galeri)
- Design minimalist dengan CSS Grid & Flexbox
- Fully responsive untuk mobile dan desktop
- Clean code structure

## 🗂️ Struktur File

```
├── beranda.html     # Halaman utama dengan form input dan tabel data
├── tentang.html     # Halaman profil dengan foto dan deskripsi
├── kontak.html      # Halaman kontak dengan form dan info kontak
├── galeri.html      # Halaman galeri foto dengan grid layout
├── ronaldo.jpg      # Foto untuk halaman profil
└── README.md        # Dokumentasi project
```

## 🎨 CSS Concepts Yang Digunakan

### CSS Grid
- Main container layout dengan `display: grid`
- Form layout dengan `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Profile layout dengan `grid-template-columns: 200px 1fr`
- Gallery grid dengan `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`

### CSS Flexbox
- Navigation bar dengan `display: flex` dan `justify-content: space-between`
- Form groups dengan `flex-direction: column`
- Gallery items dengan `flex-direction: column`
- Headers & footers untuk centering content

## 🚀 Cara Menggunakan

1. Buka file `beranda.html` di browser
2. Navigate menggunakan menu navbar ke halaman lain:
   - **Beranda**: Form input dan tabel data
   - **Tentang Saya**: Profile dengan foto dan deskripsi
   - **Kontak**: Form kontak dan informasi
   - **Galeri**: Galeri foto dengan grid layout

## 📱 Responsive Design

Website ini responsive dengan breakpoint:
- Desktop: > 768px (grid layout penuh)
- Mobile: ≤ 768px (single column layout)

## 🎯 Konsep Yang Dipelajari

- **CSS Grid Layout** untuk struktur halaman
- **CSS Flexbox** untuk alignment dan spacing
- **Responsive Design** dengan media queries
- **Clean HTML structure** semantic
- **Modern CSS practices** tanpa framework

## 💡 Tips Pembelajaran

1. Buka Developer Tools (F12) untuk melihat grid lines
2. Resize browser window untuk melihat responsive behavior
3. Inspect element untuk memahami CSS properties
4. Experiment dengan mengubah grid dan flex properties

---
**Project untuk pembelajaran CSS Grid & Flexbox**