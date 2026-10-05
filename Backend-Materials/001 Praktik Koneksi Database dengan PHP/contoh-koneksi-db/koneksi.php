<?php
// Konfigurasi latihan lokal dengan XAMPP.
// Sesuaikan dengan pengaturan MySQL/MariaDB di komputermu.
$host = '127.0.0.1';
$port = 3306;
$database = 'kampus_latihan';
$user = 'root';
$password = ''; // Bawaan XAMPP lokal; isi jika akun root memiliki password.

// File ini mengembalikan objek PDO agar dapat dipakai di file PHP lain.
return new PDO(
    "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4",
    $user,
    $password,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
);
