# Hyperlink HTML

## Apa Itu Hyperlink HTML?

Hyperlink HTML adalah tag HTML yang berfungsi untuk navigasi antarkonten: antarhalaman maupun ke tautan eksternal.

Hyperlink direpresentasikan dengan tag `<a>`.

Tag `<a>` memiliki beberapa atribut, di antaranya:

## `href`
`href` adalah atribut terpenting pada elemen `<a>` karena berfungsi untuk meletakkan tautan atau halaman tujuan.
### Contoh kode
```html
<a href="https://github.com/">Tautan menuju situs GitHub</a>
<a href="dashboard.html">Tautan menuju halaman dasbor</a>
<a href="#about">Tautan menuju bagian (section) dengan id "about"</a>
```

## `target`
Atribut `target` menjelaskan di mana tautan akan dibuka. Berikut beberapa nilai yang dapat digunakan:

### `_self`
Nilai bawaan untuk `target`, membuka tautan di halaman/tab yang sama.
```html
<a href="https://github.com/" target="_self">Tautan menuju GitHub</a>
```
Jika tidak memberikan atribut `target`, hasilnya sama dengan menggunakan nilai `_self`.
```html
<a href="https://github.com/">Tautan menuju GitHub</a>
```

### `_blank`
Membuka tautan di tab baru.
```html
<a href="https://github.com/" target="_blank">Tautan menuju GitHub</a>
```

### `_parent`
Membuka tautan hanya di induk (parent) dari sebuah `frame`.
```html
<a href="https://github.com/" target="_parent">Tautan menuju GitHub</a>
```

### `_top`
Membuka tautan secara penuh di jendela peramban, meskipun terdapat `frame` yang bersarang.
```html
<a href="https://github.com/" target="_top">Tautan menuju GitHub</a>
```
---
## Kesimpulan
Untuk membuat navigasi antarhalaman atau membuka tautan eksternal, gunakan tag `<a>` dengan atribut `href` yang diisi dengan alamat tujuan. Atribut `target` sering diisi dengan nilai `_blank` agar tautan dibuka di tab baru.
