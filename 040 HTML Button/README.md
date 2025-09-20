# Tombol HTML

## Apa itu tombol HTML?
Elemen `<button>` digunakan untuk membuat tombol yang bisa diklik. Kita dapat mengisi `<button>` dengan teks atau elemen lain seperti `<p>`, `<i>`, `<b>`, `<strong>`, `<img>`, dan lain-lain. Namun, elemen `<button>` tidak dapat berisi elemen `<input>`.

## Atribut
Berikut atribut-atribut yang ada pada elemen `<button>`.
| Atribut | Nilai | Deskripsi |
|--|--|--|
| autofocus | `autofocus` | Membuat tombol otomatis mendapatkan fokus saat halaman pertama kali dimuat. |
| disabled | `disabled` | Membuat tombol tidak bisa diklik. |
| form | `form_id` | Menentukan formulir yang terkait dengan tombol. |
| type | `button`, `reset`, `submit` | Menentukan tipe tombol. <br><br> - `type="button"` = Tombol biasa yang dapat diklik. <br><br> - `type="submit"` = Mengirim data formulir. <br><br> - `type="reset"` = Mengatur ulang data pada formulir. |
| formaction | URL | Menentukan ke mana data formulir dikirim saat tombol diklik. Hanya digunakan jika `type="submit"`. |
| formenctype | `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` | Menentukan bagaimana data formulir dikodekan sebelum dikirim ke server. Hanya digunakan jika `type="submit"`. |
| formmethod | `get`, `post` | Menentukan metode HTTP yang digunakan saat mengirim data formulir. Hanya digunakan jika `type="submit"`. |
| formnovalidate | `formnovalidate` | Mengabaikan validasi data formulir saat pengiriman. Hanya digunakan jika `type="submit"`. |
| formtarget | `_blank`, `_self`, `_parent`, `_top`, `framename` | Menentukan di mana menampilkan respons setelah formulir dikirim. Hanya digunakan jika `type="submit"`. |
| name | teks | Menentukan nama untuk tombol. |
| value | teks | Menentukan nilai untuk tombol. |

## Contoh
Berikut contoh penggunaan elemen `<button>`:
```html
<button type="submit" name="test" value="Test Submit">Submit</button>
```

## Referensi
* [HTML <button> Tag](https://www.w3schools.com/tags/tag_button.asp)
* [HTML <button> type Attribute](https://www.w3schools.com/tags/att_button_type.asp)
