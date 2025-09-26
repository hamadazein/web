# Elemen HTML

## Apa Itu Elemen dalam HTML?

Elemen __HTML__ dapat dikatakan sebagai segala sesuatu mulai dari tag pembuka hingga tag penutup. Elemen __HTML__ didefinisikan oleh tag pembuka. Jika elemen berisi konten lain, maka diakhiri dengan tag penutup, di mana nama elemen didahului oleh garis miring seperti yang ditunjukkan di bawah ini dengan beberapa tag.

## Contoh Elemen HTML

```html
<p>Elemen HTML</p>
<div>Ini adalah Elemen HTML</div>
```

Keterangan:
| Konten   | Tag Pembuka | Tag Penutup |
| -------- | :---------: | :---------: |
| Paragraf |    `<p>`    |   `</p>`    |
| Divisi   |   `<div>`   |  `</div>`   |

Jadi, di sini ada dua elemen HTML, yaitu elemen `<p>...</p>` dan elemen `<div>...</div>`. Ada beberapa elemen yang tidak memerlukan tag __penutup__ seperti `<img>`, `<br>`, `<hr>`, `<input>`, dan sebagainya.

## Nesting Elemen HTML

Elemen HTML dapat memiliki struktur bersarang, artinya suatu elemen dapat dibuat di dalam elemen lain.

Contoh:

```html
<div>
    <h3><a href="#">Bellshade</a></h3>
</div>
```

Dari contoh di atas, elemen `<div></div>` menampung elemen `<h3></h3>`, dan elemen `<h3></h3>` menampung elemen hyperlink (`<a></a>`). Sehingga, akan ditampilkan sebuah hyperlink dalam bentuk heading yang dibungkus dalam elemen `<div></div>`.
