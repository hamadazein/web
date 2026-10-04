# Praktik Koneksi Database dengan PHP

Materi kedua pada jalur Form, PHP & Database: mempraktikkan teori koneksi melalui form pendaftaran mahasiswa. Ikuti langkah dari membuat tabel, membuka koneksi PHP, sampai memastikan nama dan email benar-benar tersimpan.

## Slide 1 — Dari teori ke praktik

**Praktik Koneksi Database dengan PHP: Pendaftaran Mahasiswa**

- Pertemuan: Materi 2, setelah Teori Koneksi Database.
- Prasyarat: Memahami form HTML dan alur form → PHP → database → hasil.
- Kasus: Menyimpan nama dan email mahasiswa.
- Hasil akhir: Form yang menambahkan baris baru ke database lokal.

**Kalimat pembuka:** “Kemarin kita memahami tugas petugas administrasi. Hari ini kita membuat petugas itu benar-benar menerima dan mencatat pendaftaran.”

## Slide 2 — Tujuan dan alur praktik

Setelah mengikuti materi ini, mahasiswa mampu:

- Membuat database dan tabel sederhana.
- Menghubungkan PHP ke MySQL menggunakan PDO.
- Memeriksa isian nama dan email di server.
- Menyimpan data menggunakan prepared statement.
- Memeriksa hasil penyimpanan dan mengenali kegagalan umum.

![Alur form HTML mengirim data ke PHP, PHP menyimpan ke database, dan PHP mengirim hasil ke browser.](../000%20Teori%20Koneksi%20Database/alur-data.svg)

**Urutan praktik:** siapkan tempat menyimpan → buat koneksi → buat form → periksa isian → simpan → cek hasil.

## Slide 3 — Menyiapkan database dan tabel

Gunakan lingkungan latihan lokal dengan **PHP, ekstensi `pdo_mysql`, dan MySQL**. Pengajar membantu menyiapkan akun database `latihan_user` yang memiliki izin SELECT dan INSERT pada tabel latihan. Akun administrator digunakan untuk membuat database/tabel, bukan untuk menjalankan form.

Jalankan SQL berikut melalui alat pengelola database, misalnya tab SQL pada phpMyAdmin:

```sql
CREATE DATABASE kampus_latihan CHARACTER SET utf8mb4;
USE kampus_latihan;

CREATE TABLE mahasiswa (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(254) NOT NULL
);
```

| Bagian | Makna sederhana |
| --- | --- |
| `kampus_latihan` | Tempat menyimpan tabel latihan |
| `mahasiswa` | Daftar pendaftaran mahasiswa |
| `id` | Nomor catatan yang dibuat otomatis |
| `nama`, `email` | Informasi yang diisi pengguna |
| `NOT NULL` | Menolak nilai NULL; teks kosong tetap perlu ditolak PHP |

**Cara menjelaskan:** “Buku induk sudah dibuat, tetapi belum ada mahasiswa yang tercatat.” Jalankan SQL ini sekali pada database latihan baru; jika sudah ada, gunakan database/tabel tersebut.

## Slide 4 — Menyiapkan file dan konfigurasi

Buat folder kerja di komputer latihan:

```text
pendaftaran/
├── koneksi.php
└── public/
    ├── form.html
    ├── cek-koneksi.php
    └── proses.php
```

Folder `public` menjadi satu-satunya folder yang dilayani browser. `koneksi.php` berada di luarnya dan dipanggil oleh PHP di server.

Untuk latihan di PowerShell, buka terminal pada folder `pendaftaran`, lalu jalankan:

```powershell
$env:DB_HOST = "127.0.0.1"
$env:DB_NAME = "kampus_latihan"
$env:DB_USER = "latihan_user"
$env:DB_PASSWORD = Read-Host "Masukkan password akun database latihan"
php -S 127.0.0.1:8000 -t public
```

Masukkan password yang diberikan pengajar. Password dibaca dari lingkungan proses, bukan ditulis di file publik. `Read-Host` biasa menampilkan karakter yang diketik; gunakan terminal pribadi. MySQL harus sudah berjalan, dan akun latihan harus diizinkan terhubung melalui `127.0.0.1`.

Buka **http://127.0.0.1:8000/form.html** setelah semua file diisi. Server bawaan PHP ini digunakan untuk latihan lokal. GitHub Pages dan playground HTML/CSS Weblab tidak menjalankan PHP atau MySQL.

## Slide 5 — Membuat koneksi menggunakan PDO

**PDO** adalah fasilitas PHP untuk berkomunikasi dengan database. Simpan kode ini sebagai `koneksi.php`:

```php
<?php
$host = getenv('DB_HOST');
$database = getenv('DB_NAME');
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

if (!$host || !$database || !$user || $password === false || $password === '') {
    throw new RuntimeException('Konfigurasi database belum lengkap.');
}

$pdo = new PDO(
    "mysql:host=$host;port=3306;dbname=$database;charset=utf8mb4",
    $user,
    $password,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
);
```

`getenv()` membaca pengaturan terminal. String yang diawali `mysql:` menyebutkan alamat, port, database, dan pengodean teks. `$pdo` adalah objek koneksi untuk mengirim query. Jika port MySQL latihan berbeda, sesuaikan `3306`.

Mode exception membuat kegagalan dapat ditangani melalui `try` dan `catch`. Opsi terakhir meminta PDO memakai prepared statement asli dari database. Bentuk koneksi ini mengikuti [dokumentasi PDO MySQL](https://www.php.net/manual/en/ref.pdo-mysql.connection.php).

**Cara menjelaskan:** “Empat informasi koneksi adalah alamat, identitas petugas, kunci masuk, dan ruang arsip tujuan.”

## Slide 6 — Menguji koneksi terlebih dahulu

Simpan sebagai `public/cek-koneksi.php`:

```php
<?php
try {
    require dirname(__DIR__) . '/koneksi.php';
    echo 'Koneksi database berhasil.';
} catch (PDOException | RuntimeException $error) {
    error_log($error->getMessage());
    http_response_code(503);
    echo 'Koneksi belum berhasil. Periksa konfigurasi dan layanan database.';
}
```

`require` memuat file koneksi. `dirname(__DIR__)` menunjuk ke folder di atas `public`. `try` mencoba membuka koneksi; `catch` menangani kegagalan agar browser mendapatkan pesan yang mudah dipahami. Detail pemeriksaan masuk ke log server/terminal, bukan ditampilkan pada halaman.

Buka **http://127.0.0.1:8000/cek-koneksi.php**. Jika berhasil, lanjutkan ke form. Jika gagal, periksa MySQL, nama database, akun, password, dan izin akses.

**Poin utama:** Koneksi berhasil belum berarti data sudah disimpan. Pada langkah ini, tabel masih dapat kosong.

## Slide 7 — Membuat form nama dan email

Simpan sebagai `public/form.html`:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pendaftaran mahasiswa</title>
  </head>
  <body>
    <h1>Pendaftaran mahasiswa</h1>
    <form action="proses.php" method="post">
      <p>
        <label for="nama">Nama</label>
        <input id="nama" name="nama" type="text" maxlength="100" required />
      </p>
      <p>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" maxlength="254" required />
      </p>
      <button type="submit">Simpan pendaftaran</button>
    </form>
  </body>
</html>
```

Nama field harus sama dengan kunci yang dibaca PHP: `nama` dan `email`. POST mengirim keduanya ke `proses.php`. Form membantu pemeriksaan di browser; PHP tetap memeriksa permintaan di server.

**Contoh isian:** Siti, `siti@example.com`. Gunakan data rekaan untuk latihan.

## Slide 8 — Validasi dan insert data

Simpan sebagai `public/proses.php`:

```php
<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Kirim data melalui form.');
}

$inputNama = $_POST['nama'] ?? '';
$inputEmail = $_POST['email'] ?? '';
$nama = is_string($inputNama) ? trim($inputNama) : '';
$email = is_string($inputEmail) ? trim($inputEmail) : '';

if ($nama === '' || strlen($nama) > 100) {
    http_response_code(422);
    exit('Nama wajib diisi dan maksimal 100 byte untuk latihan ini.');
}

if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('Masukkan alamat email yang valid.');
}

try {
    require dirname(__DIR__) . '/koneksi.php';
    $query = $pdo->prepare(
        'INSERT INTO mahasiswa (nama, email) VALUES (:nama, :email)'
    );
    $query->execute(['nama' => $nama, 'email' => $email]);
    echo 'Pendaftaran berhasil disimpan untuk ';
    echo htmlspecialchars($nama, ENT_QUOTES, 'UTF-8');
} catch (PDOException | RuntimeException $error) {
    error_log($error->getMessage());
    http_response_code(503);
    echo 'Pendaftaran belum tersimpan. Periksa layanan penyimpanan.';
}
```

Jelaskan dalam tiga bagian: **ambil dan periksa → buka koneksi → simpan**. `prepare()` menyiapkan perintah SQL; `execute()` mengirim nilainya secara terpisah. Ini adalah pola [prepared statement pada PDO](https://www.php.net/manual/en/pdo.prepare.php).

`strlen()` menghitung byte, sehingga beberapa karakter memakai lebih dari satu byte. Batas nama pada contoh dibuat konservatif agar penanganannya tetap sederhana. `htmlspecialchars()` mengamankan tampilan nama di HTML, sedangkan prepared statement memisahkan input dari SQL.

## Slide 9 — Memastikan data tersimpan dan membaca masalah

Kirim form sekali, lalu periksa tabel melalui alat pengelola database:

```sql
SELECT id, nama, email
FROM mahasiswa
ORDER BY id DESC;
```

Contoh hasil pada tabel yang sebelumnya kosong:

| id | nama | email |
| --- | --- | --- |
| 1 | Siti | siti@example.com |

**Pesan sukses dan baris baru di tabel** menunjukkan alur penyimpanan berhasil. Pemeriksaan tabel dilakukan melalui alat database pada tahap ini; membuat halaman daftar mahasiswa menjadi latihan berikutnya.

| Gejala | Hal yang diperiksa |
| --- | --- |
| Perintah `php` tidak dikenali | Instalasi PHP dan lokasi executable pada PATH |
| `could not find driver` pada log | Ekstensi `pdo_mysql` pada PHP yang menjalankan server |
| Konfigurasi belum lengkap | Empat variabel lingkungan di terminal yang sama |
| Koneksi ditolak | MySQL berjalan, alamat dan port sesuai |
| Akses ditolak | Akun, password, host yang diizinkan, dan hak akses |
| Database/tabel tidak ditemukan | Nama pada SQL dan konfigurasi sama |
| Nama/email ditolak | Isian memenuhi aturan validasi |

Jika halaman hasil POST di-refresh dan browser mengirim ulang form, baris dapat bertambah lagi. Untuk percobaan ini, kembali ke form sebelum mengirim data baru. Mekanisme pencegahan kirim ulang dapat dipelajari setelah alur dasar dipahami.

## Slide 10 — Rangkuman dan latihan mandiri

**Koneksi membuka akses. Validasi memeriksa isian. Insert membuat catatan. SELECT membantu mengecek hasil.**

Uji empat kondisi berikut pada lingkungan lokal:

| Percobaan | Hasil yang diharapkan |
| --- | --- |
| Nama dan email valid | Pesan sukses; satu baris baru |
| Nama berisi spasi saja | Pesan nama wajib diisi; tidak ada baris baru |
| Email tidak valid | Pesan email tidak valid; tidak ada baris baru |
| Layanan MySQL dimatikan | Pesan gagal penyimpanan; tidak ada baris baru |

Untuk menguji validasi server pada email, pemeriksaan `type="email"` di browser dapat menghalangi pengiriman. Pada salinan form latihan lokal, ubah sementara ke `type="text"`, kirim email tidak valid, lalu kembalikan seperti semula.

**Tugas kecil:** Tambahkan field `kelas`. Tambahkan kolom pada tabel, pemeriksaan di PHP, dan parameter pada insert. Pilih batas panjang yang sama pada seluruh bagian.

**Yang dikumpulkan:** File latihan, tangkapan layar tabel dengan data rekaan, serta catatan hasil empat percobaan. Jangan menyertakan password. Jelaskan selama 2–3 menit mengapa `echo` saja tidak membuktikan bahwa data sudah tersimpan.
