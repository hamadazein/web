# Figure HTML

## Apa itu figure HTML?

Figure adalah elemen semantik HTML5 yang digunakan untuk menandai atau menjelaskan sebuah konten. Elemen `<figure>` memberi tahu peramban bahwa ia adalah wadah yang menampung beberapa elemen yang saling berhubungan.

Konten di dalam `<figure>` biasanya terdiri dari gambar dan `<figcaption>` sebagai keterangan.

```html
<figure>
  <img src="kucing-oren.jpg" alt="kucing oren" />
  <figcaption>Kucing oren</figcaption>
</figure>
```

Hasilnya seperti ini:

![HTML Figure](contoh-gambar.png)

## Contoh kode

Selain gambar, elemen `<figure>` juga dapat menyimpan video, baris kode, kutipan, dan lain-lain.

Contoh barisan kode:

```html
<figure>
  <pre>
     <code>
        p {
        color: green;
        }
      </code>
  </pre>
  <figcaption>Contoh memberikan warna teks dengan CSS</figcaption>
</figure>
```

Contoh kutipan:

```html
<figure>
  <figcaption><b>Ali bin Abi Thalib berkata:</b></figcaption>
  <blockquote>
    Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka
    mendengarnya jika orang lain mengucapkannya kepadamu.
  </blockquote>
</figure>
```
