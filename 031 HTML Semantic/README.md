# HTML Semantik

## Apa itu HTML semantik?

HTML semantik adalah dokumen HTML yang terstruktur dengan elemen yang bermakna. Elemen semantik diperkenalkan pada HTML5 untuk memberikan makna atau arti pada halaman web.

HTML memiliki beberapa elemen semantik seperti `<header>`, `<footer>`, `<article>`, dan lain-lain.

Sebagai contoh, tag `<header>` digunakan untuk membuat bagian atas halaman. Kita bisa saja menggunakan tag `<div>` alih-alih `<header>`, tetapi hal itu membuat situs web yang kita buat menjadi tidak semantik.

## Mengapa HTML harus semantik?

HTML yang benar secara semantis akan membantu perangkat seperti _screen reader_ menguraikan isi dari situs tersebut. Perangkat seperti _screen reader_ membantu teman-teman kita yang disabilitas untuk mendapatkan informasi dari situs yang kita buat.

Selain itu, jika kita menggunakan elemen semantik, dokumen HTML akan lebih mudah dibaca, baik oleh mesin maupun oleh kita sebagai manusia.

Ini adalah contoh kode HTML yang tidak menggunakan elemen semantik:

```html
<div id="header"></div>
<div class="bagian-awal">
  <div class="artikel"></div>
</div>
```

Dan ini adalah kode HTML yang menggunakan elemen semantik:

```html
<header></header>
<section>
  <article></article>
</section>
```

Jika dibandingkan, kode HTML yang menggunakan elemen semantik lebih mudah dibaca dan lebih ringkas dibandingkan dengan kode yang tidak menggunakan elemen semantik.

## SEO

Karena HTML semantik mudah dibaca oleh manusia maupun mesin, HTML semantik cenderung lebih disukai oleh mesin pencari karena dapat menginterpretasikan konten dengan baik. Hal ini berdampak baik pada situs web kita karena peluang untuk mendapatkan peringkat teratas di hasil pencarian seperti Google.

## Daftar elemen semantik

- `<header>` untuk membuat bagian atas halaman
- `<article>` untuk membuat elemen artikel
- `<nav>` untuk membuat navigasi
- `<main>` untuk membuat konten utama
- `<details>` untuk membuat elemen detail atau spoiler
- `<aside>` untuk membuat bagian samping (sidebar)
- `<summary>` untuk membuat ringkasan artikel atau isi spoiler
- `<figcaption>` untuk membuat keterangan pada figure
- `<mark>` untuk menandai teks
- `<section>` untuk membuat bagian artikel
- `<time>` untuk membuat elemen yang menyatakan waktu
- dan masih banyak lagi.

## Header HTML

### Apa itu header HTML?

Tag `<header>` dalam HTML berfungsi untuk menandai suatu elemen sebagai konten pengantar, judul, atau tautan navigasi.

Tag `<header>` tidak boleh ditempatkan di dalam `<footer>`, `<address>`, atau di dalam elemen `<header>` lainnya.

### Contoh kode

**HTML**

```html
<header>
  <!-- di sini header berfungsi sebagai judul -->
  <h1>Lorem ipsum dolor sit amet</h1>
  <header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fugit
      soluta, necessitatibus reiciendis quibusdam temporibus molestias
      repellendus corrupti quisquam eaque, corporis, minima earum rem distinctio
      incidunt nesciunt consequatur illum. Hic.
    </p>
  </header>
</header>
```

### Contoh lain

<header>
  Daftar Menu
</header>
<input type="radio" id="menu1">
<label for="menu1">Nasi Goreng</label>
<br>
<input type="radio" id="menu2">
<label for="menu2">Mi Goreng</label>
<br>
<input type="radio" id="menu3">
<label for="menu3">Sate</label>
<br>
<input type="radio" id="menu4">
<label for="menu4">Ubi Goreng</label>

## Referensi

Untuk referensi lengkapnya, Anda bisa mengunjungi situs berikut.

- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
