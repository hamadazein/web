# Label HTML

## Definisi dan penggunaan

Elemen `<label>` digunakan untuk mendefinisikan label bagi elemen lain seperti `<input>`, `<textarea>`, dan `<select>`. Label ini dapat diklik untuk memfokuskan elemen yang ditunjuk.

Penggunaan elemen `<label>` sangat penting untuk meningkatkan aksesibilitas situs web. Jika `<label>` digunakan dengan benar, pengguna pembaca layar akan mendapatkan informasi yang lebih baik tentang elemen yang dituju. Selain itu, `<label>` juga dapat digunakan untuk menghubungkan elemen lain dengan elemen yang dituju.

Elemen `<label>` dengan atribut `for` yang nilainya sama dengan `id` suatu elemen akan menghubungkan keduanya. Contoh: `<label for="nama">` akan menghubungkan ke `<input id="nama">`.

## Contoh

### Penggunaan `<label>` untuk `<input>`

```html
<form action="/action_page.php">
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label><br><br>
  <input type="submit" value="Submit">
</form>
```

Referensi: [W3Schools](https://www.w3schools.com/tags/tag_label.asp)
