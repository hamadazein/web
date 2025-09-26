# Video HTML

## Apa itu video HTML?

HTML memiliki elemen `<video>` untuk menampilkan video di peramban atau situs web. Tidak semua peramban mendukung semua format video, jadi sediakan beberapa format untuk memastikan video dapat diputar. Caranya, letakkan beberapa sumber di dalam elemen `<source>` atau gunakan atribut `src` pada `<video>`.

## Cara menggunakan `<video>`

Contoh penggunaan sederhana:

```html
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620"
>
  Maaf, peramban yang Anda gunakan tidak mendukung video tersemat. Anda tetap bisa melihatnya dengan mengunduh
  <a href="https://archive.org/details/BigBuckBunny_124">di sini</a>.
</video>
```

Penggunaan dengan lebih dari satu format video:

Jika ingin memastikan video tampil di peramban mana pun, gunakan beberapa tag `<source>` di dalam `<video>` dengan format berbeda, seperti ini:

```html
<video controls>
  <!-- lebih dari satu format video untuk mengantisipasi peramban yang tidak mendukung format tertentu -->
  <source src="video/myVideo.mp4" type="video/mp4" />
  <source src="video/myVideo.webm" type="video/webm" />

  <!-- fallback jika peramban tidak mendukung tag <video> -->
  <p>
    Peramban yang Anda gunakan tidak mendukung video HTML5. Berikut
    <a href="video/myVideo.mp4">tautan video</a> untuk melihatnya.
  </p>
</video>
```

Memasang subtitle/caption ke dalam video:

Pada tag `<video>` Anda juga dapat menambahkan caption/subtitle dengan memasukkan tag `<track>` ke dalam `<video>`, seperti ini:

```html
<video id="video" controls preload="metadata">
  <source src="video/myVideo.mp4" type="video/mp4" />
  <source src="video/myVideo.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="captions/vtt/myVideo-en.vtt"
    default
  />
  <track
    label="Indonesia"
    kind="subtitles"
    srclang="id"
    src="captions/vtt/myVideo-id.vtt"
  />
</video>
```

Untuk informasi lebih lanjut:
- Tag `<track>`: HTML Track
- Tag `<source>`: HTML Source

## Atribut pada tag `<video>`

Beberapa atribut yang umum digunakan:

- `autoplay` — atribut boolean untuk menjalankan video secara otomatis. Di sebagian peramban, atribut ini tidak aktif jika tidak ada `muted`.
- `controls` — menampilkan kontrol video seperti volume, geser (seek), jeda/lanjut.
- `muted` — jika ada, video tidak mengeluarkan audio.
- `poster` — URL gambar yang ditampilkan sebelum video diputar. Jika tidak disetel, tidak ada yang ditampilkan hingga video siap diputar, kemudian frame pertama menjadi poster.

Catatan: Jika menampilkan video dari suatu tautan di internet, pastikan tidak melanggar hak cipta pemilik video tersebut.

## Referensi

Untuk referensi lengkap, kunjungi [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).
