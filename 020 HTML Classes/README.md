# Kelas HTML (HTML Classes)

## Apa Itu Kelas (class) di HTML?

Kelas (class) di HTML digunakan untuk melakukan pengelompokan elemen. Misalnya, membuat class untuk header dan class untuk paragraf.

## Contoh Sederhana

Untuk melakukan pengelompokan, terdapat tag bernama `<div>` tempat sebuah elemen diletakkan. Biasanya `<div>` diberi properti `class=""` atau `id=""`.

### Contoh

Penggunaan tag `<div>` dan properti `class`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pengelompokan/class</title>
  </head>
  <body>
  <!-- Harus dibungkus dalam tag <div> -->
  <!-- Class yang digunakan bernama box -->
    <div class="box">
      <h1>Hello world</h1>
    </div>
  </body>
</html>
```

### Contoh Lain

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh ke 2</title>
  </head>
  <body>
    <div id="main">
      <p>Halo nama saya kuro</p>
    </div>
  </body>
</html>
```

## Styling dengan CSS

Keuntungan menggunakan class adalah kita bisa memberi gaya (style) pada banyak elemen sekaligus. Untuk memberi gaya pada class, gunakan `.` diikuti nama class. Jika menggunakan id, gunakan `#` diikuti nama id.

## Contoh Styling Menggunakan Class

```css
/* sebuah titik di depan nama class */
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Artinya: memberi gaya pada class bernama box dengan properti `width`, `height`, dan `background-color`.

### Dengan Elemen di Dalamnya

```css
.box h1 {
  color: blue;
}
```

Artinya: memberi gaya pada class yang di dalamnya terdapat tag `<h1>` dengan properti `color`.

## Contoh Styling Menggunakan id

<!-- tanda pagar (#) di depan nama id -->

```css
#main {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Artinya: memberi gaya pada id bernama main dengan properti `width`, `height`, dan `background-color`.

### Dengan Elemen di Dalamnya

```css
#main p {
  color: purple;
}
```

Artinya: memberi gaya pada id bernama main yang di dalamnya terdapat tag `<p>` dengan properti `color`.

## Catatan

- Penamaan class dan id bebas sesuai kebutuhan.
- Satu id hanya boleh digunakan satu kali dalam satu halaman; tidak boleh sama dengan elemen lain.
- Satu class boleh digunakan oleh banyak elemen.
