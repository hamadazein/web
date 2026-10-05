<?php
// Konfigurasi latihan lokal dengan XAMPP.
// Sesuaikan dengan pengaturan MySQL/MariaDB di komputermu.
$host = '127.0.0.1';
$port = 3306;
$database = 'kampus_latihan';
$user = 'root';
$password = ''; // Bawaan XAMPP lokal; isi jika akun root memiliki password.

$pdo = new PDO(
    "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4",
    $user,
    $password
);

return $pdo;
