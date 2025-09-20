# Kode Komputer di HTML

## HTML `<kbd>` untuk Input Keyboard

HTML `<kbd>` adalah elemen yang digunakan untuk menentukan input keyboard. Konten di dalamnya ditampilkan dalam font monospace default browser.

Contoh:

```html
<p>Simpan dokumen dengan menekan <kbd>Ctrl + S</kbd></p>
```

## HTML `<samp>` untuk Keluaran Program

HTML `<samp>` adalah elemen yang digunakan untuk menentukan keluaran sampel dari program komputer. Konten di dalamnya ditampilkan dalam font monospace default browser.

Contoh:

```html
<p>Pesan dari komputer saya :</p>
<p>
  <samp>File not found.<br />Tekan F1 untuk melanjutkan</samp>
</p>
```

## HTML `<code>` untuk Kode Komputer

HTML `<code>` elemen digunakan untuk mendefinisikan sepotong kode komputer. Konten di dalamnya ditampilkan dalam font monospace default browser.

Contoh:

```html
<code> x = 5; y = 6; z = x + y; </code>
```

Perhatikan bahwa elemen `<code>` tidak memberi spasi ekstra dan jeda baris. Untuk memperbaikinya, letakkan elemen `<code>` di dalam elemen `<pre>`.

Contoh:

```html
<pre>
   <code>
      x = 5;
      y = 6;
      z = x + y;
   </code>
</pre>
```

## HTML `<var>` untuk Variabel

HTML `<var>` digunakan untuk mendefinisikan variabel dalam pemrograman atau dalam logika matematika. Konten di dalamnya biasanya ditampilkan dalam huruf miring.

Contoh:

```html
<p>Area dari segitiga adalah: 1/2 x <var>b</var> x <var>h</var>, dimana <var>b</var> adalah dasar dari <var>h</var> tinggi vertikal dari segitiga.</p>
```

Sumber: https://www.w3schools.com/html/html_computercode_elements.asp
