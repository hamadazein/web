# Formulir HTML

Formulir pada HTML berfungsi untuk mengirim data melalui elemen-elemen formulir di dalamnya seperti bidang teks, tombol radio, menu tarik-bawah, dan lain-lain.

## Elemen form

Sebelum membuat elemen pada formulir, seluruh elemen yang digunakan harus berada di antara tag `<form>` dan `</form>`. Contoh penggunaannya sebagai berikut:

```html
<form>
  <!-- baris ini bisa dihapus -->
  elemen form ditulis di sini
  <!-- baris ini bisa dihapus -->
</form>
```

## Membuat elemen input

Elemen `<input>` pada formulir HTML adalah elemen yang paling sering digunakan. Tag `<input>` memiliki beberapa atribut tipe seperti `text`, `radio`, dan `checkbox`.

### Input tipe teks

Elemen `<input type="text">` akan berupa bidang teks yang dapat diisi.

```html
<form>
  <h5>Nama Depan:</h5>
  <input type="text" />
  <h5>Nama Belakang:</h5>
  <input type="text" />
</form>
```

Keluaran:

<form>
  <h5>Nama Depan:</h5>
  <input type="text">
  <h5>Nama Belakang:</h5>
  <input type="text">
</form>
<br>

### Input tipe tombol radio

Elemen `<input type="radio">` menampilkan pilihan berbentuk bulat dan hanya dapat dipilih salah satu.

```html
<form>
  <h5>Jenis Kelamin</h5>
  <input type="radio" value="laki-laki" />
  <label>Laki-laki</label><br />
  <input type="radio" value="perempuan" />
  <label>Perempuan</label><br />
</form>
```

Keluaran:

<form>
  <h5>Jenis Kelamin</h5>
  <input type="radio" value="laki-laki">
  <label>Laki-laki</label><br>
  <input type="radio" value="perempuan">
  <label>Perempuan</label><br>
</form>
<br>

### Input tipe kotak centang

Elemen `<input type="checkbox">` menampilkan pilihan berbentuk kotak dan dapat dipilih lebih dari satu.

```html
<form>
  <h5>Hobi</h5>
  <input type="checkbox" value="membaca" />
  <label>Membaca</label><br />
  <input type="checkbox" value="menyanyi" />
  <label>Menyanyi</label><br />
  <input type="checkbox" value="menulis" />
  <label>Menulis</label><br />
  <input type="checkbox" value="olahraga" />
  <label>Olahraga</label><br />
</form>
```

Keluaran:

<form>
  <h5>Hobi</h5>
  <input type="checkbox" value="membaca">
  <label>Membaca</label><br>
  <input type="checkbox" value="menyanyi">
  <label>Menyanyi</label><br>
  <input type="checkbox" value="menulis">
  <label>Menulis</label><br>
  <input type="checkbox" value="olahraga">
  <label>Olahraga</label><br>
</form>
<br>
