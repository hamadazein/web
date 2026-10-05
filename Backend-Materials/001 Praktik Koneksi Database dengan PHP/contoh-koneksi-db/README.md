# Contoh koneksi PHP ke MySQL

Contoh sederhana memakai PDO. Siapkan PHP dengan ekstensi `pdo_mysql`, layanan MySQL yang berjalan pada port 3306, dan akun database latihan.

```text
contoh-koneksi-db/
├── koneksi.php
├── database.sql
└── public/
    └── cek-koneksi.php
```

## 1. Siapkan PHP dan database melalui XAMPP

Database menyimpan data aplikasi secara terstruktur. MySQL/MariaDB adalah DBMS yang mengelola database, sedangkan phpMyAdmin adalah alat untuk mengelolanya melalui browser. XAMPP membundel lingkungan latihan tersebut bersama PHP dan Apache. XAMPP menyertakan MariaDB, meskipun tombol layanannya berlabel MySQL; lihat [FAQ resmi XAMPP](https://www.apachefriends.org/faq_windows.html).

Jika PHP dan MySQL/MariaDB sudah terpasang, lanjutkan ke langkah 2. Untuk latihan Windows dengan XAMPP:

1. Unduh dan pasang XAMPP dari [Apache Friends](https://www.apachefriends.org/download.html). Contoh berikut menggunakan lokasi `C:\xampp`.
2. Buka XAMPP Control Panel dan klik **Start** untuk Apache dan MySQL.
3. Buka <http://localhost/phpmyadmin/>. Jika Apache memakai port lain, sesuaikan URL.
4. Pastikan PHP dapat dijalankan dari PowerShell:

```powershell
& 'C:\xampp\php\php.exe' -v
& 'C:\xampp\php\php.exe' -m
```

Daftar modul harus memuat `PDO` dan `pdo_mysql`. Sesuaikan lokasi executable jika XAMPP dipasang di folder berbeda.

Apache diperlukan untuk membuka phpMyAdmin. Halaman contoh ini akan dilayani server bawaan PHP pada port 8000. MySQL harus tetap berjalan untuk melayani koneksi database.

## 2. Buat database dan akun latihan

Di phpMyAdmin, buka tab **Import**, pilih file `database.sql` dari folder ini, lalu jalankan import. File tersebut membuat database `kampus_latihan`. Contoh pengecekan ini menggunakan `SELECT 1`, sehingga tidak memerlukan tabel.

Dengan akun administrator, buka tab **SQL** dan jalankan perintah berikut setelah mengganti password contoh dengan password milikmu. Jangan simpan password asli ke repositori.

```sql
CREATE USER 'latihan_user'@'127.0.0.1' IDENTIFIED BY 'GANTI_DENGAN_PASSWORD_SENDIRI';
GRANT SELECT ON kampus_latihan.* TO 'latihan_user'@'127.0.0.1';
```

Perintah ini membuat akun yang sesuai dengan `DB_HOST=127.0.0.1` dan memberi izin baca untuk latihan. Jalankan `CREATE USER` satu kali; jika akun sudah ada, gunakan akun tersebut dan periksa izin/passwordnya. Untuk materi penyimpanan berikutnya, tambahkan izin INSERT pada tabel latihan yang sudah dibuat.

## 3. Atur koneksi dan jalankan server PHP

Buka PowerShell pada folder `contoh-koneksi-db`, lalu atur akun yang sudah dibuat di database:

```powershell
$env:DB_HOST = '127.0.0.1'
$env:DB_NAME = 'kampus_latihan'
$env:DB_USER = 'latihan_user'
$env:DB_PASSWORD = Read-Host 'Password akun database latihan' -MaskInput
php -S 127.0.0.1:8000 -t public
```

`-MaskInput` memerlukan PowerShell 7.1 atau lebih baru. Pada Windows PowerShell 5.1, gunakan `Read-Host` tanpa `-MaskInput`; karakter password akan terlihat saat diketik. Akun `latihan_user` harus sudah tersedia dan diizinkan terhubung dari host tersebut; contoh ini tidak membuat akun otomatis.

Jika `php` belum dikenali, ganti baris terakhir dengan executable PHP milik XAMPP:

```powershell
& 'C:\xampp\php\php.exe' -S 127.0.0.1:8000 -t public
```

Variabel lingkungan harus diatur pada terminal yang sama dengan perintah server. Folder contoh tidak perlu dipindah ke `htdocs` karena server ini melayani `public` langsung.

## 4. Buka halaman pengecekan

Buka <http://127.0.0.1:8000/cek-koneksi.php>. Jika berhasil, halaman menampilkan **Koneksi database MySQL berhasil!**

Gunakan `Ctrl+C` untuk menghentikan server. Server bawaan PHP digunakan untuk latihan lokal. GitHub Pages tidak menjalankan PHP atau MySQL.

`koneksi.php` mengembalikan objek PDO, yang dipakai halaman pengecekan untuk menjalankan `SELECT 1`. Query ini tidak mengubah data. Password dibaca dari lingkungan dan file koneksi berada di luar folder publik.

## 5. Periksa masalah koneksi

| Masalah | Pemeriksaan |
| --- | --- |
| `php` tidak dikenali | Gunakan executable `C:\xampp\php\php.exe` atau sesuaikan PATH |
| `could not find driver` | Periksa `pdo_mysql` melalui `php -m` dan file konfigurasi melalui `php --ini` |
| `Connection refused` | Pastikan layanan MySQL berjalan pada host yang benar dan port 3306 |
| `Access denied` | Cocokkan akun, password, host akun, dan hak akses |
| `Unknown database` | Pastikan import SQL berhasil dan `DB_NAME` bernilai `kampus_latihan` |
| Port 8000 sudah dipakai | Jalankan server pada port 8001, lalu sesuaikan URL browser |

Port 8000 melayani halaman web; port 3306 melayani database. Kode koneksi contoh memakai port database 3306 secara tetap. Jika port database diubah, sesuaikan `port=3306` pada `koneksi.php`.

Untuk memeriksa sintaks, jalankan perintah berikut. Gunakan path executable XAMPP seperti langkah 1 jika `php` belum dikenali.

```powershell
php -l koneksi.php
php -l public/cek-koneksi.php
```
