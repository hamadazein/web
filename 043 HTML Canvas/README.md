# Canvas HTML

## Apa itu canvas HTML?

Pada HTML5 terdapat elemen `<canvas>`. Elemen ini berguna untuk menggambar grafik atau objek pada halaman web dengan bantuan JavaScript. Anda sebaiknya menguasai dasar-dasar JavaScript untuk memanipulasi objek pada elemen ini, karena `<canvas>` hanya berupa kanvas, sedangkan penggambaran dan manipulasi dilakukan dengan JavaScript.

Secara umum, elemen ini sering digunakan untuk membangun gim web. Contoh penulisan elemen `<canvas>` sebagai berikut:

```html
<canvas></canvas>
```

## Apakah ada atribut pada tag `<canvas>`?

Tag ini tidak memiliki atribut khusus untuk penggambaran; pengaturan dan pemrosesan dilakukan dengan JavaScript.

## Apa saja yang bisa digambar?

- **Teks** — canvas dapat digunakan untuk menggambar teks.
- **Grafik** — canvas sering digunakan untuk menggambar berbagai jenis grafik.
- **Animasi** — canvas dapat digunakan untuk menganimasikan objek yang telah digambar.

Dan masih banyak hal lain yang bisa dilakukan dengan elemen ini.

## Bagaimana cara menggambarnya?

```html
<canvas id="canvas1" width="500" height="500"></canvas>

<script>
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  console.log(ctx); // untuk melihat fungsi bawaan (built-in) yang tersedia

  const letakHorizontal = 100;
  const letakVertikal = 100;
  const width = 200;
  const height = 200;

  ctx.fillRect(letakHorizontal, letakVertikal, width, height);
  ctx.fillStyle = "black";
  ctx.fill();
</script>
```
Output:

![20211016_225218](https://user-images.githubusercontent.com/87674246/137592171-f561296d-7913-4ca8-879b-6d3016ebe962.jpg)

Keunikannya, objek pada canvas bisa dimanipulasi dengan banyak hal karena `<canvas>` memiliki banyak fungsi bawaan. Canvas tidak hanya bisa menggambar satu objek saja, melainkan sebanyak yang dibutuhkan.

## Referensi

Untuk referensi lengkap, Anda bisa mengunjungi [tautan berikut](https://www.w3schools.com/html/html5_canvas.asp).
