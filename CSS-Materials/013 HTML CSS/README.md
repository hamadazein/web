## CSS pada HTML

### Apa Itu CSS?

CSS (Cascading Style Sheets) berfungsi untuk mengatur tata letak dan tampilan sebuah situs web.

CSS dapat digunakan dengan tiga cara:

1. **Inline CSS** – Menggunakan atribut `<style>` di dalam elemen HTML.
2. **Internal CSS** – Menggunakan elemen `<style>` di bagian `<head>`.
3. **Eksternal CSS** – Menggunakan elemen `<link>` untuk menautkan file HTML dengan file CSS.

### Contoh Penerapan CSS

**Inline CSS**

```html
<h1 style="color:blue;">Heading berwarna biru.</h1>

<p style="color:red;">Paragraf berwarna merah.</p>
```

**Internal CSS**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {background-color: black;}
      h1   {color: blue;}
      p    {color: red;}
    </style>
  </head>
  <body>

    <h1>Ini adalah heading.</h1>
    <p>Ini adalah paragraf.</p>

  </body>
</html>
```

**Eksternal CSS**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <h1>Ini adalah heading.</h1>
    <p>Ini adalah paragraf.</p>

  </body>
</html>
```

Dalam file CSS:
```css
body {
  background-color: black;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```