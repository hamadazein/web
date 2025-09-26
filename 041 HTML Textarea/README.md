# Textarea HTML

## Apa itu tag `<textarea>`?

Elemen HTML `<textarea>` mewakili kontrol pengeditan teks multibaris. Elemen ini berguna saat Anda ingin mengizinkan pengguna memasukkan teks bentuk bebas dalam jumlah cukup besar, misalnya komentar pada ulasan atau formulir umpan balik.

Fitur `<textarea>` antara lain:

- Atribut `id` untuk mengaitkan `<textarea>` dengan elemen `<label>` demi aksesibilitas.
- Atribut `name` untuk menetapkan nama titik data yang dikirim ke server saat formulir dikirim.
- Atribut `rows` dan `cols` untuk menentukan ukuran (jumlah baris dan kolom). Mengatur ini disarankan demi konsistensi karena nilai bawaan peramban dapat berbeda.
- Konten bawaan dimasukkan di antara tag pembuka dan penutup. `<textarea>` tidak mendukung atribut `value`.

Elemen `<textarea>` juga menerima beberapa atribut yang umum pada tag `<input>`, seperti `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, dan `required`.

### Contoh kode

#### HTML

```html
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

#### CSS

```css
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}
textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
```

### Contoh lain

#### Contoh dasar

Contoh berikut menunjukkan penggunaan `<textarea>` sederhana, dengan `rows`, `cols`, dan beberapa konten bawaan.

```html
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```

#### Panjang minimal dan maksimal

Contoh berikut menunjukkan penggunaan `<textarea>` dengan jumlah karakter minimum dan maksimum menggunakan atribut `minlength` (panjang minimum) dan `maxlength` (panjang maksimum).

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">Write something here</textarea>
```

> Perhatikan bahwa `minlength` tidak mencegah pengguna menghapus karakter hingga melewati batas minimum; ini hanya membuat nilai yang dimasukkan tidak valid. Juga, meskipun Anda menetapkan `minlength` (misalnya 3), `<textarea>` kosong tetap dianggap valid kecuali Anda juga menetapkan atribut `required`.

#### Placeholder

Contoh berikut menunjukkan `<textarea>` dengan `placeholder`. Perhatikan `placeholder` akan menghilang ketika Anda mulai mengetik.

```html
<textarea name="textarea" rows="5" cols="30" placeholder="Comment text."></textarea>
```

> Catatan: Placeholder hanya boleh digunakan untuk memperlihatkan contoh tipe data yang harus dimasukkan ke dalam formulir. Placeholder bukan pengganti elemen `<label>` yang tepat.

### Disabled dan readonly

Contoh ini menunjukkan dua `<textarea>`: satu menggunakan atribut `disabled` dan satu lagi menggunakan `readonly`. Coba keduanya untuk melihat perbedaannya. Elemen `disabled` tidak dapat dipilih dengan cara apa pun (dan nilainya tidak dikirim), sedangkan elemen `readonly` dapat dipilih dan isinya dapat disalin (dan nilainya dikirim); Anda hanya tidak dapat mengedit isinya.

> Catatan: Di peramban selain Firefox, seperti Chrome, konten `<textarea>` yang `disabled` dapat dipilih dan disalin.

```html
<textarea name="textarea" rows="5" cols="30" disabled>I am a disabled textarea</textarea>
<textarea name="textarea" rows="5" cols="30" readonly>I am a readonly textarea</textarea>
```

## Referensi

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
