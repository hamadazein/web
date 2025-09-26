# Tag `<base>` pada HTML

## Definisi dan Penggunaan

Elemen `<base>` berfungsi untuk menentukan URL dasar dan/atau target untuk semua URL relatif dalam dokumen. URL relatif adalah URL yang tidak memiliki protokol, domain, atau path. Contoh URL relatif: `index.html` atau `../index.html`.

Elemen `<base>` harus memiliki salah satu atribut `href` atau `target`, atau keduanya. Jika elemen `<base>` tidak memiliki `href`, maka URL relatif akan dianggap sebagai URL absolut. Jika elemen `<base>` tidak memiliki `target`, maka target bawaan adalah `_self`.

Elemen `<base>` hanya bisa digunakan satu kali dan harus berada di dalam elemen `<head>`.

## Contoh

### Penggunaan `<base>` untuk menentukan URL dasar

```html
<head>
    <base href="https://www.w3schools.com/" target="_blank">
</head>
<body>
    <img src="images/stickman.gif" width="24" height="39" alt="Stickman">
    <a href="tags/tag_base.asp">HTML base Tag</a>
</body>
```

Maka hasil url dari href dari `HTML base Tag` di atas menjadi `https://www.w3schools.com/tags/tag_base.asp` dan target menjadi `_blank`.

Referensi: https://www.w3schools.com/tags/tag_base.asp
