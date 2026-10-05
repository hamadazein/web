<?php
// Pengaturan berasal dari variabel lingkungan di terminal/server.
$host = getenv('DB_HOST') ?: '127.0.0.1';
$database = getenv('DB_NAME') ?: 'kampus_latihan';
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

if ($user === false || $user === '' || $password === false) {
    throw new RuntimeException('Atur DB_USER dan DB_PASSWORD terlebih dahulu.');
}

// File ini mengembalikan objek PDO agar dapat dipakai di file PHP lain.
return new PDO(
    "mysql:host={$host};port=3306;dbname={$database};charset=utf8mb4",
    $user,
    $password,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
);
