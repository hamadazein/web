<?php // Membuka bagian kode PHP yang dijalankan oleh server.
$host = '127.0.0.1'; // Alamat server database pada komputer sendiri.
$port = 3306; // Port layanan MySQL/MariaDB; sesuaikan dengan pengaturan XAMPP.
$database = 'kampus_latihan'; // Nama database yang dibuat melalui database.sql.
$user = 'root'; // Akun database untuk latihan lokal dengan XAMPP.
$password = ''; // Password kosong pada XAMPP bawaan; isi jika akun memiliki password.

$pdo = new PDO( // PDO (PHP Data Objects) membuka koneksi dan menyimpannya dalam $pdo.
    "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4", // Memilih driver MySQL, alamat, port, database, dan charset pendukung Unicode.
    $user, // Mengirim username untuk mengakses database.
    $password // Mengirim password akun database.
); // Menutup pemanggilan PDO; jika koneksi gagal, PDO melempar exception.

return $pdo; // Mengembalikan objek koneksi kepada file yang memanggil koneksi.php melalui require.
