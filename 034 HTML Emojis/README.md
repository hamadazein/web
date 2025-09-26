# Emoji HTML

HTML dapat menampilkan emoji menggunakan kode desimal atau heksadesimal. Agar peramban memahami bahwa kita sedang menampilkan karakter emoji, awali dengan `&#` dan akhiri dengan `;`.

Sebagai contoh:

```html
<!-- Menggunakan heksadesimal -->
<p>Akan menampilkan &#x1F981;</p> <!-- Akan menampilkan 🦁 -->

<!-- Menggunakan desimal -->
<p>Akan menampilkan &#129409;</p> <!-- Akan menampilkan 🦁 -->
```

Daftar emoji dapat Anda lihat di sini: https://unicode.org/emoji/charts/full-emoji-list.html

## Emoji dengan warna kulit

Beberapa emoji memiliki variasi warna kulit yang berbeda-beda. Berikut contohnya:

|   Desimal   |         Warna          | Pratinjau |
| :---------: | :--------------------: | :-------: |
| `&#127999;` |     Dark skin tone     | &#127999; |
| `&#127998;` | Medium Dark skin tone  | &#127998; |
| `&#127997;` |    Medium skin tone    | &#127997; |
| `&#127996;` | Medium Light skin tone | &#127996; |
| `&#127995;` |    Light skin tone     | &#127995; |

Penggunaan warna kulit dapat ditambahkan setelah kode emoji. Contoh:

```html
<p><span>&#129306;</span> No skin tone</p> <!-- 🤚  No skin tone -->
<p><span>&#129306;&#127999;</span> Dark skin tone</p> <!-- 🤚🏿  Dark skin tone -->
<p><span>&#129306;&#127998;</span> Medium Dark skin tone</p> <!-- 🤚🏾  Medium Dark skin tone -->
<p><span>&#129306;&#127997;</span> Medium skin tone</p> <!-- 🤚🏽  Medium skin tone -->
<p><span>&#129306;&#127996;</span> Medium Light skin tone</p> <!-- 🤚🏼  Medium Light skin tone -->
<p><span>&#129306;&#127995;</span> Light skin tone</p> <!-- 🤚🏻  Light skin tone -->
```

Referensi:
https://www.w3schools.com/charsets/ref_emoji.asp
https://www.w3schools.com/charsets/ref_emoji_skin_tones.asp
