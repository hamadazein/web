# Gambar HTML

## Apa Itu Gambar HTML?

HTML memiliki elemen `<img>` yang sangat berguna saat membangun situs web. Tanpa gambar, situs web akan terasa membosankan; karena itu, penting mempelajari penggunaan gambar di HTML.

Penulisan tag `<img>` tidak memerlukan tag penutup. Contohnya:

```html
<img src="" alt="">
```

## Atribut pada tag `<img>`

Terdapat setidaknya dua atribut yang umum digunakan:

- **src** – Digunakan untuk menentukan jalur (path) ke gambar.
- **alt** – Digunakan untuk menampilkan teks alternatif jika gambar gagal ditampilkan.

## Cara Menampilkan Gambar

Untuk menampilkan gambar, arahkan tag `<img>` ke file yang diinginkan melalui atribut `src="url"` atau `src="imagepath"`.

Contoh: menampilkan gambar `kucing.png` yang berada pada folder yang sama dengan file HTML.

```html
<img src="kucing.png" alt="kucing">
```

Jika file gambar berada di direktori tertentu, tuliskan terlebih dahulu direktorinya.

```html
<img src="images/kucing.png" alt="kucing">
```

Jika file gambar berada pada sebuah tautan di internet:

```html
<img src="https://www.contoh.com/images/kucing.png" alt="kucing">
```

Catatan: jika ingin menggunakan gambar dari tautan internet, pastikan tidak melanggar hak cipta pemilik gambar.

## Referensi

Untuk referensi lengkap, Anda dapat mengunjungi [halaman berikut](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).
