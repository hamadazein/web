# Contoh koneksi PHP ke MySQL

Contoh sederhana memakai PDO. Siapkan PHP dengan ekstensi `pdo_mysql`, layanan MySQL yang berjalan pada port 3306, dan akun database latihan.

```text
contoh-koneksi-db/
├── koneksi.php
├── database.sql
└── public/
    └── cek-koneksi.php
```

1. Jalankan `database.sql` melalui phpMyAdmin atau klien MySQL untuk membuat database `kampus_latihan`.
2. Buka PowerShell pada folder `contoh-koneksi-db`, lalu atur akun yang sudah dibuat di MySQL:

```powershell
$env:DB_HOST = '127.0.0.1'
$env:DB_NAME = 'kampus_latihan'
$env:DB_USER = 'latihan_user'
$env:DB_PASSWORD = Read-Host 'Password akun database latihan' -MaskInput
php -S 127.0.0.1:8000 -t public
```

`-MaskInput` memerlukan PowerShell 7.1 atau lebih baru. Pada Windows PowerShell 5.1, gunakan `Read-Host` tanpa `-MaskInput`; karakter password akan terlihat saat diketik. Akun `latihan_user` harus sudah tersedia dan diizinkan terhubung dari host tersebut; contoh ini tidak membuat akun otomatis.

3. Buka <http://127.0.0.1:8000/cek-koneksi.php>. Jika berhasil, halaman menampilkan **Koneksi database MySQL berhasil!**

Gunakan `Ctrl+C` untuk menghentikan server. Server bawaan PHP digunakan untuk latihan lokal. GitHub Pages tidak menjalankan PHP atau MySQL.

`koneksi.php` mengembalikan objek PDO, yang dipakai halaman pengecekan untuk menjalankan `SELECT 1`. Query ini tidak mengubah data. Password dibaca dari lingkungan dan file koneksi berada di luar folder publik.

Jika gagal, periksa nama database, akun/password, port MySQL, dan ekstensi melalui `php -m`. Untuk memeriksa sintaks:

```powershell
php -l koneksi.php
php -l public/cek-koneksi.php
```
