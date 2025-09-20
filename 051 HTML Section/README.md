# Elemen `<section>` HTML

Tag `<section></section>` mendefinisikan sebuah bagian (section) dalam dokumen.

Tag `<section>` termasuk elemen semantik, sehingga lebih mudah dipahami oleh mesin pencari maupun pengguna.

Menurut W3C, section adalah pengelompokan tematik konten; biasanya berisi judul (h1–h6).

Bagaimana jika di dalam `<section>` tidak ada tag heading (h1–h6) atau paragraf (`<p>`)?

Mesin pencari maupun pengguna akan kesulitan memahami topik/tujuan bagian tersebut. Dampaknya, navigasi menjadi kurang jelas dan pengindeksan oleh mesin pencari dapat terganggu.

Biasanya `<section>` digunakan untuk:

- Bab atau bagian utama dari buku/artikel
- Pendahuluan/perkenalan
- Item berita
- Informasi kontak

Contoh penggunaan:

```html
<section>
    <h2>Judul</h2>
    <div>
        <h3>Sub Judul</h3>
        <p>Ini paragraf 1</p>
        <p>Ini paragraf 2</p>
    </div>
</section>
```

Di dalam section Anda dapat menggunakan tag `div`, misalnya untuk memisahkan bagian lain. Contoh berikut tetap termasuk semantik meskipun dikombinasikan dengan `div`:

```html
<section>
    <div>
        <h2>Judul</h2>
        <p>ini budi</p>
    </div>
</section>
```

Gaya CSS bawaan untuk `<section>`:

```css
display: block;
```
