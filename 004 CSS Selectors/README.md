## CSS Selectors

### Apa Itu CSS Selectors?

CSS Selectors adalah cara yang digunakan untuk memilih elemen HTML yang ingin diberi gaya.

Terdapat beberapa jenis selectors, antara lain:

- Element Selectors
- ID Selectors
- Class Selectors
- Grouping Selectors
- Universal Selectors

### Element Selectors

Element Selectors adalah selector yang digunakan untuk memilih elemen berdasarkan nama tag atau nama elemen.

Contoh penggunaan Element Selector.

Kita memiliki HTML seperti ini:

```html
<p>Paragraf pertama</p>
<p>Paragraf kedua</p>
```

Lalu kita ingin memberi gaya berdasarkan nama tag. Pada CSS, kita tuliskan:

```css
p {
  color: blue;
}
```

Hasilnya, seluruh tag `p` akan berwarna biru.

### ID Selectors

ID Selectors adalah selector yang digunakan untuk memilih elemen berdasarkan nama id.

Contoh penggunaan ID Selector.

Kita memiliki HTML seperti ini:

```html
<p id="pertama">Paragraf pertama</p>
<p id="kedua">Paragraf kedua</p>
```

Lalu kita ingin memberi gaya berdasarkan id. Pada CSS, kita tuliskan:

```css
#pertama {
  color: blue;
}

#kedua {
  color: red;
}
```

Hasilnya, paragraf dengan id `pertama` akan berwarna biru, sedangkan paragraf dengan id `kedua` akan berwarna merah.

### Class Selectors

Class Selectors adalah selector yang digunakan untuk memilih elemen berdasarkan nama class.

Contoh penggunaan class Selector.

Kita memiliki HTML seperti ini:

```html
<p class="pertama">Paragraf pertama</p>
<p class="kedua">Paragraf kedua</p>
```

Lalu kita ingin memberi gaya berdasarkan class. Pada CSS, kita tuliskan:

```css
.pertama {
  color: blue;
}

.kedua {
  color: red;
}
```

Hasilnya, paragraf dengan class `pertama` akan berwarna biru, sedangkan paragraf dengan class `kedua` akan berwarna merah.

### Grouping Selectors

Grouping Selectors adalah selector yang digunakan untuk memilih beberapa elemen.

Contoh penggunaan CSS tanpa grouping selector.

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

Contoh penggunaan CSS menggunakan grouping selector.

```css
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

Untuk menyingkat penulisan, kita dapat menggunakan grouping selector. Untuk menggunakan grouping selector, cukup menambahkan tanda `,` untuk pemisah selector.

### Universal Selectors

Universal Selectors adalah selector yang digunakan untuk memilih semua elemen sekaligus.

Contoh penggunaan CSS universal selector.

```css
* {
  margin: 0;
  padding: 0;
}
```

Hasilnya, seluruh elemen akan memiliki gaya `margin: 0` dan `padding: 0`.
