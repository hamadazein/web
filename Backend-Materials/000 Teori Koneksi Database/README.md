# Teori Koneksi Database

Materi lanjutan setelah HTML, CSS, Bootstrap, dan Tailwind: memahami bagaimana data dari form diproses oleh PHP lalu disimpan ke database. Sepuluh slide pengantar ini memakai satu contoh sederhana, yaitu pendaftaran mahasiswa.

## Slide 1 — Dari tampilan ke penyimpanan data

**Teori Koneksi Database: Dari Form ke Data Tersimpan**

- Jalur: Form, PHP & Database.
- Pertemuan: Pengantar backend dan koneksi database.
- Peserta: Mahasiswa yang sudah mengenal HTML, CSS, dan framework tampilan.
- Contoh: Mengirim nama melalui form pendaftaran mahasiswa.

HTML menyusun halaman. CSS, Bootstrap, dan Tailwind membantu mengatur tampilannya. Sekarang kita mempelajari apa yang terjadi **setelah tombol Kirim ditekan**.

## Slide 2 — Tujuan pembelajaran

**Mahasiswa dapat menceritakan perjalanan data dari form sampai tersimpan.**

Setelah pertemuan ini, mahasiswa mampu menjelaskan:

- Tugas form HTML, PHP, dan database.
- Empat informasi yang diperlukan untuk koneksi database.
- Langkah menyimpan data dan memberi pesan hasil.
- Mengapa input harus diperiksa terlebih dahulu.

Fokus pertemuan adalah memahami alur. Contoh kode hanya membantu mengenali bentuknya.

## Slide 3 — Alur besar dan analogi sederhana

![Alur form HTML mengirim data ke PHP, PHP memeriksa dan menyimpan ke database, status kembali ke PHP lalu hasil ditampilkan di browser.](alur-data.svg)

**Form HTML → PHP → Database → Hasil**

Bayangkan proses pendaftaran di bagian administrasi kampus:

| Bagian web | Analogi | Tugas |
| --- | --- | --- |
| Form HTML | Formulir pendaftaran | Mengumpulkan nama |
| PHP | Petugas administrasi | Menerima dan memeriksa isian |
| Database | Buku induk mahasiswa | Menyimpan data secara teratur |
| Hasil | Bukti pendaftaran | Memberi tahu berhasil atau gagal |

Browser adalah aplikasi untuk membuka web. Server adalah komputer yang menjalankan PHP dan melayani permintaan. Browser mengirim isian ke PHP; PHP yang berkomunikasi dengan database.

**Pertanyaan kelas:** Jika nama belum diisi, apakah petugas seharusnya langsung mencatatnya?

## Slide 4 — Form HTML: tempat mengisi data

```html
<form action="proses.php" method="post">
  <label for="nama">Nama mahasiswa</label>
  <input id="nama" name="nama" type="text" required />
  <button type="submit">Kirim</button>
</form>
```

- **Field**: kotak isian untuk nama mahasiswa.
- `name="nama"`: label data yang akan dikenali oleh PHP.
- `action="proses.php"`: alamat tujuan pengiriman.
- `method="post"`: cara mengirim isian di badan permintaan.

**Cara menjelaskan:** Form seperti amplop. `action` adalah alamat penerima, sedangkan `name` adalah penanda isi amplop. POST tidak otomatis membuat pengiriman terenkripsi; gunakan HTTPS.

## Slide 5 — PHP: menerima dan memeriksa data

PHP berjalan di server. Contoh ringkas isi `proses.php`:

```php
<?php
$input = $_POST['nama'] ?? '';
$nama = is_string($input) ? trim($input) : '';

if ($nama === '') {
    echo 'Nama wajib diisi.';
    exit;
}

echo 'Halo, ' . htmlspecialchars($nama, ENT_QUOTES, 'UTF-8');
```

`$_POST['nama']` mengambil isian nama. `trim()` membuang spasi di awal dan akhir. Jika nama kosong, PHP menghentikan proses dan meminta pengguna memperbaiki isian.

`echo` menampilkan pesan. `htmlspecialchars()` membuat input tampil sebagai teks ketika dimasukkan ke halaman HTML.

**Poin utama:** Menampilkan “Halo, Siti” belum berarti nama Siti sudah tersimpan. Pemeriksaan di server tetap diperlukan meskipun form memiliki `required`.

## Slide 6 — Koneksi database: membuka akses penyimpanan

Database menyimpan data dalam **tabel**. Bayangkan tabel seperti lembar daftar mahasiswa: kolom memberi nama informasi, baris berisi satu catatan mahasiswa.

| id | nama |
| --- | --- |
| 1 | Siti |
| 2 | Budi |

Sebelum menyimpan, PHP harus membuka koneksi dengan empat informasi:

| Informasi | Penjelasan sederhana | Analogi |
| --- | --- | --- |
| Host | Alamat server database, misalnya `localhost` | Alamat gedung |
| User | Akun yang diberi izin mengakses database | Nama petugas |
| Password | Rahasia untuk membuktikan akses akun | Kunci masuk |
| Nama database | Kumpulan tabel tujuan, misalnya `kampus` | Ruang arsip tujuan |

**Pseudocode — gambaran langkah, bukan kode siap dijalankan:**

```text
ambil host, user, password, dan nama database dari konfigurasi server
buka koneksi menggunakan empat informasi tersebut
jika gagal: tampilkan "Penyimpanan belum tersedia" dan hentikan proses
jika berhasil: lanjutkan ke langkah penyimpanan
```

**Poin utama:** Koneksi hanya membuka akses. Koneksi yang berhasil belum otomatis menyimpan data. Database dan tabel perlu disiapkan terlebih dahulu.

## Slide 7 — Insert: menambahkan catatan baru

**Insert** berarti menambahkan baris baru ke tabel. SQL adalah bahasa perintah untuk berkomunikasi dengan database.

Contoh bentuk perintah yang disiapkan PHP:

```sql
INSERT INTO mahasiswa (nama) VALUES (:nama);
```

Artinya: “Tambahkan satu mahasiswa, isi kolom nama dengan nilai yang dikirim.” `:nama` adalah tempat untuk nilai yang disertakan secara terpisah melalui **prepared statement**.

```text
periksa nama dari form
buka koneksi database
siapkan perintah insert
kirim nama sebagai parameter dan jalankan perintah
jika berhasil: tampilkan "Data berhasil disimpan"
jika gagal: tampilkan "Data belum tersimpan"
```

**Cara menjelaskan:** Petugas baru menulis ke buku induk setelah isian lengkap dan buku dapat diakses. Pesan sukses diberikan setelah penyimpanan dikonfirmasi.

## Slide 8 — Keamanan dasar

- **Periksa input di server.** Orang dapat mengirim isian tanpa memakai form kita. Cek nama tidak kosong dan panjangnya sesuai kolom tabel.
- **Pisahkan data dari SQL.** Gunakan prepared statement agar input diperlakukan sebagai nilai, bukan perintah tambahan.
- **Tampilkan input sebagai teks.** Gunakan `htmlspecialchars()` saat memasukkannya ke HTML.
- **Simpan password di konfigurasi server.** Gunakan variabel lingkungan atau file di luar folder publik; jangan menaruhnya di HTML, JavaScript, atau repositori.
- **Berikan pesan gagal yang sederhana.** Detail teknis dicatat di server, tanpa memperlihatkan password atau informasi koneksi kepada pengguna.

**Analogi:** Petugas memeriksa formulir, menjaga kunci arsip, dan tidak mengikuti sembarang instruksi yang ditulis pendaftar.

## Slide 9 — Rangkuman

**Isi form → PHP memeriksa → buka koneksi → insert → tampilkan hasil.**

- Form mengumpulkan data, PHP mengolahnya, database menyimpannya.
- Koneksi memerlukan host, user, password, dan nama database.
- Koneksi membuka akses; insert menambahkan catatan.
- `echo` menampilkan pesan, bukan menyimpan data.
- Pesan sukses atau gagal harus sesuai dengan hasil proses.

**Cek pemahaman:** Apa bedanya berhasil terhubung, berhasil menampilkan nama, dan berhasil menyimpan nama?

## Slide 10 — Latihan singkat

**Tugas teori: Jelaskan alur pendaftaran mahasiswa dengan nama dan email.**

1. Gambar alur form → PHP → database → hasil.
2. Tentukan field pada form dan kolom pada tabel `mahasiswa`.
3. Sebutkan empat informasi koneksi database beserta fungsinya. Gunakan contoh rekaan, bukan password asli.
4. Tulis pseudocode pemeriksaan, koneksi, dan penyimpanan.
5. Tentukan pesan untuk tiga kondisi: nama kosong, database tidak dapat dihubungi, dan data berhasil disimpan.

**Yang dikumpulkan:** Satu halaman berisi diagram, daftar field/kolom, dan pseudocode. Jelaskan alurnya dengan bahasa sendiri selama 2–3 menit.

**Praktik pendamping:** Dengan bantuan pengajar, coba form dan PHP pada server latihan lokal, lalu lanjutkan insert dengan database yang sudah disiapkan. Playground HTML/CSS pada situs ini hanya menampilkan sisi browser; PHP memerlukan server yang mendukung PHP.
