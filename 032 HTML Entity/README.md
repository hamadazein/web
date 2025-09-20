## Entitas HTML

### Apa itu entitas HTML?

Entitas HTML dapat direpresentasikan sebagai potongan string. Dalam penggunaannya, entitas menggunakan `&` (ampersand) sebagai awalan, yang sering kita temukan saat membuat atau mengunjungi situs web, misalnya untuk simbol seperti hak cipta (©), lebih besar (>), lebih kecil (<), dan sebagainya.

Dalam HTML, terdapat dua macam entitas, yaitu `Entity Name` dan `Entity Number`.

## Entity Number

Menggunakan kode desimal ASCII atau heksadesimal ASCII. Contoh:

```html
<p>&#169; Bellshade LEARN WITH OUR COMMUNITY</p>
```

Keluaran: `© Bellshade LEARN WITH OUR COMMUNITY`

## Entity Name

Lebih mudah karena menggunakan alfabet sehingga lebih mudah diingat. Contoh:

```html
<p>&copy; Bellshade LEARN WITH OUR COMMUNITY</p>
```

Keluaran: `© Bellshade LEARN WITH OUR COMMUNITY`

Terlihat perbedaannya: `Entity Name` lebih mudah diingat karena menggunakan huruf alfabet. Namun, `Entity Name` belum didukung oleh semua peramban sehingga penggunaan `Entity Number` lebih diunggulkan dari segi dukungan peramban.

Beberapa karakter entitas lain yang dapat digunakan:

Char | Number | Entity
---- | ------ | ------
`©`  | `&#169;` | `&copy;`
`®`  | `&#174;` | `&reg;`
`™`  | `&#8482;` | `&trade;`
`@`  | `&#64;` | `&commat;`
`¶`  | `&#182;` | `&para;`
`§`  | `&#167;` | `&sect;`
`&`  | `&#38;` | `&amp;`
`>`  | `&#62;` | `&gt;`
`<`  | `&#60;` | `&lt;`

Selengkapnya mengenai simbol-simbol pada entitas HTML dapat dilihat di:

- [Free Formatter](https://www.freeformatter.com/html-entities.html)
