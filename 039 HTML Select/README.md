# HTML Select

## Definisi dan penggunaan

Elemen `<select>` digunakan untuk membuat daftar tarik-bawah (drop-down list).

Elemen `<select>` paling sering digunakan pada formulir untuk mengumpulkan input dari pengguna.

Atribut `name` dibutuhkan sebagai referensi data formulir saat formulir dikirim (jika Anda melewatkan atribut `name`, tidak ada data dari daftar tarik-bawah yang akan terkirim).

Atribut `id` dibutuhkan untuk mengasosiasikan daftar tarik-bawah dengan sebuah label.

Tag `<option>` di dalam `<select>` mendefinisikan opsi yang tersedia pada daftar tarik-bawah.

Tips: Selalu tambahkan tag `<label>` sebagai praktik aksesibilitas yang baik.

## Contoh

### Membuat daftar tarik-bawah dengan empat pilihan

```html
<label for="mobil">Pilih salah satu mobil:</label>
<select name="mobil" id="mobil">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

## Contoh lain

### Menggunakan `<select>` dengan `<optgroup>`

```html
<label for="cars">Pilih mobil:</label>
<select name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

Referensi: [W3Schools](https://www.w3schools.com/tags/tag_select.asp)
