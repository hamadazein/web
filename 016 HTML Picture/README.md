# Gambar Responsif dengan `<picture>`

## Apa Itu `<picture>`?

HTML memiliki elemen `<picture>` yang sangat berguna saat membangun situs web. Tanpa gambar, situs web terasa membosankan; karena itu, penting mempelajari penggunaan `<picture>`.

Elemen `<picture>` memiliki fungsi mirip media query pada CSS, tetapi tanpa memerlukan CSS. Hanya dengan HTML, gambar dapat dibuat responsif.

## Contoh kode
```html
<picture></picture>
```

Elemen turunan `<picture>` adalah `<source>` dan `<img>`.

```html
<picture>
    <source>
    <img src="" alt="">
</picture>
```

Untuk menampilkan gambar, arahkan tag `<img>` ke file yang diinginkan melalui atribut `src="url"` atau `src="imagepath"`.

Belum belajar tentang tag HTML `<img>`? Silakan pelajari di [HTML Images](https://github.com/bellshade/HTML-CSS/tree/main/HTML/015%20HTML%20Images).

Beberapa atribut yang umum digunakan pada tag `<source>`:
- **srcset** – Menentukan jalur (path) gambar.
- **sizes** – Menentukan ukuran gambar.
- **media** – Menentukan media query.

## Contoh kode
```html
<picture>
    <source srcset="img1.png">
    <source srcset="img2.png">
    <source srcset="img3.png">
    <img src="img1.png" alt="gambarku">
</picture>
```
atau
```html
<picture>
    <source media="(min-width: 960px)" srcset="img1.png">
    <source media="(min-width: 600px)" srcset="img2.png">
    <source srcset="img3.png">
    <img src="img1.png" alt="kucing-sedang-bermain">
</picture>
```
## Contoh pengimplementasiannya:
1. Silakan buka [index.html](index.html), salin (copy) dan tempel (paste) seluruh isi kodenya.
2. Buka VS Code atau IDE favorit Anda.
3. Buat file index.html dan jalankan pada peramban.
4. Akan terlihat gambar kucing (serius).
5. Kecilkan lebar peramban secara perlahan.
6. Gambar kucing (serius) akan berubah menjadi (senyum), lalu berubah lagi menjadi (menangis) seiring lebar peramban diperkecil.

Semoga bermanfaat!

Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
