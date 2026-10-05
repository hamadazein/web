# Contoh form mahasiswa, PHP, dan database dengan XAMPP

Contoh ini mengirim tiga isian **nama, NIM, dan email** dari HTML ke PHP, lalu menyimpannya ke database melalui PDO. Jalankan melalui Apache dan MySQL/MariaDB milik XAMPP dengan alamat `localhost`.

## 1. Jalankan XAMPP

1. Pasang XAMPP dari [Apache Friends](https://www.apachefriends.org/download.html). Contoh lokasi pemasangan: `C:\xampp`.
2. Buka **XAMPP Control Panel**.
3. Klik **Start** pada **Apache** dan **MySQL**. Pastikan keduanya berjalan.
4. Buka <http://localhost/> untuk memeriksa server web.

Apache melayani halaman PHP. MySQL/MariaDB mengelola database. XAMPP menyertakan MariaDB, meskipun tombolnya berlabel MySQL; lihat [FAQ resmi XAMPP](https://www.apachefriends.org/faq_windows.html).

## 2. Salin folder contoh ke htdocs

Salin seluruh folder `contoh-koneksi-db` ke `C:\xampp\htdocs` sehingga strukturnya menjadi:

```text
C:\xampp\htdocs\contoh-koneksi-db\
├── README.md
├── database.sql
├── koneksi.php
└── public\
    ├── cek-koneksi.php
    ├── form.html
    └── proses.php
```

Sesuaikan lokasi jika XAMPP dipasang di folder lain. Apache memakai `htdocs` sebagai lokasi halaman web pada konfigurasi bawaan. Setelah menyalin, edit file dalam salinan tersebut untuk mengubah konfigurasi yang dijalankan.

## 3. Buat database lewat phpMyAdmin

1. Buka <http://localhost/phpmyadmin/>.
2. Pada halaman utama, pilih tab **Import**.
3. Pilih file `database.sql` dari folder contoh.
4. Klik **Go/Kirim** dan pastikan import berhasil.
5. Periksa bahwa database `kampus_latihan` muncul pada daftar database.

Import membuat database `kampus_latihan` dan tabel `mahasiswa` dengan kolom `id`, `nama`, `nim`, dan `email`. `id` dihasilkan otomatis; NIM disimpan sebagai teks agar nol di awal tidak hilang dan diberi aturan UNIQUE agar tidak terdaftar dua kali.

Jika tabel `mahasiswa` dari latihan sebelumnya sudah ada tanpa kolom `nim`, import ini tidak mengubah strukturnya. Untuk mempertahankan data lama, buat database latihan baru, ubah nama database pada `database.sql` dan `$database` pada `koneksi.php`, lalu import ke database baru tersebut.

## 4. Periksa konfigurasi koneksi.php

File `koneksi.php` sudah berisi konfigurasi latihan XAMPP:

```php
$host = '127.0.0.1';
$port = 3306;
$database = 'kampus_latihan';
$user = 'root';
$password = '';
```

| Pengaturan | Fungsi |
| --- | --- |
| `$host` | Alamat server database pada komputer sendiri |
| `$port` | Port layanan database; biasanya 3306 |
| `$database` | Nama database hasil import |
| `$user` | Akun database untuk latihan lokal |
| `$password` | Password akun; kosong pada konfigurasi bawaan XAMPP lokal |

Jika akun `root` sudah memiliki password, isi `$password` sesuai pengaturanmu. Jika menggunakan akun latihan sendiri, ganti `$user` dan `$password` dengan akun tersebut. Contoh akun `root` ini ditujukan untuk latihan lokal. Untuk server publik, gunakan akun berizin terbatas dan konfigurasi di luar folder web. Jangan commit password asli.

PDO membuka koneksi menggunakan charset `utf8mb4` dan mengembalikan objek koneksi untuk digunakan file pengecekan.

## 5. Buka halaman pengecekan

Buka melalui browser:

<http://localhost/contoh-koneksi-db/public/cek-koneksi.php>

Jika berhasil, halaman menampilkan:

```text
Koneksi database MySQL berhasil!
```

`cek-koneksi.php` memuat `koneksi.php` dan menjalankan `SELECT 1`. Pesan berhasil berarti koneksi dan query pengecekan berhasil; data mahasiswa belum disimpan.

Jika Apache menggunakan port 8080, buka `http://localhost:8080/contoh-koneksi-db/public/cek-koneksi.php` dan `http://localhost:8080/phpmyadmin/`. Port web ini berbeda dengan port database pada `$port`.

### Kirim data mahasiswa melalui form

1. Buka <http://localhost/contoh-koneksi-db/public/form.html>.
2. Isi nama, NIM, dan email. Contoh: `Siti Aminah`, `00123456`, `siti@example.com`.
3. Klik **Simpan data**. Form mengirim ketiga nilai dengan POST ke `proses.php`.
4. PHP memeriksa isian, membuka koneksi, lalu menjalankan INSERT menggunakan prepared statement.
5. Jika berhasil, halaman menampilkan konfirmasi dan ketiga nilai yang disimpan.
6. Buka phpMyAdmin, pilih `kampus_latihan` → `mahasiswa` → **Browse/Jelajahi**. Pastikan satu baris baru berisi nama, NIM, dan email tersebut.

Jika Apache memakai port lain, sesuaikan URL form seperti URL pengecekan koneksi.

| File | Tugas |
| --- | --- |
| `public/form.html` | Menampilkan tiga isian dan tombol simpan |
| `public/proses.php` | Memeriksa isian dan menyimpan data mahasiswa |
| `koneksi.php` | Membuka koneksi PDO |
| `database.sql` | Membuat database dan struktur tabel |

Pemeriksaan browser melalui `required`, `maxlength`, dan `type="email"` membantu pengguna mengisi form. PHP juga memeriksa data karena permintaan dapat dikirim tanpa melalui form. Parameter `:nama`, `:nim`, dan `:email` memisahkan nilai pengguna dari perintah SQL.

Untuk latihan, coba email tidak valid, nama kosong, dan NIM yang sudah terdaftar. Isian tidak valid atau NIM duplikat tidak boleh menambahkan baris. Gunakan NIM baru untuk pendaftaran berikutnya. Menyegarkan halaman hasil dapat mengirim ulang POST; aturan NIM unik mencegah catatan yang sama ditambahkan kembali.

## 6. Periksa masalah yang muncul

| Masalah | Pemeriksaan |
| --- | --- |
| Halaman tidak terbuka | Apache berjalan dan port URL sesuai |
| 404 / halaman tidak ditemukan | Lokasi folder di `htdocs`, nama file, dan URL |
| `Connection refused` | MySQL berjalan serta `$host` dan `$port` sesuai |
| `Access denied` | Username, password, dan izin akun database |
| `Unknown database` | Import berhasil dan `$database` bernilai `kampus_latihan` |
| Tabel atau kolom belum tersedia | Import struktur tabel yang memiliki kolom `nama`, `nim`, dan `email` |
| `could not find driver` | Ekstensi `pdo_mysql` pada PHP XAMPP |

Halaman pengecekan menampilkan pesan gagal umum. Periksa status layanan, konfigurasi, dan log melalui XAMPP Control Panel. File contoh hanya mencatat jenis exception agar informasi koneksi tidak tampil di browser.

Pemeriksaan sintaks opsional melalui PowerShell dari folder contoh:

```powershell
& 'C:\xampp\php\php.exe' -l koneksi.php
& 'C:\xampp\php\php.exe' -l public/cek-koneksi.php
& 'C:\xampp\php\php.exe' -l public/proses.php
```

GitHub Pages menyediakan materi dan file contoh; PHP dan database dijalankan pada XAMPP lokal.
