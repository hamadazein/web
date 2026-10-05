<?php // Membuka kode PHP untuk menerima dan menyimpan isian form.
header('Content-Type: text/html; charset=utf-8'); // Mengatur jenis halaman dan pengodean teks.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { // Memastikan halaman dipanggil melalui pengiriman form.
    header('Allow: POST'); // Memberi tahu metode permintaan yang diperbolehkan.
    http_response_code(405); // Menandai bahwa metode permintaan tidak sesuai.
    exit('Kirim data melalui <a href="form.html">form pendaftaran</a>.'); // Menghentikan proses.
} // Menutup pemeriksaan metode.

$nama = $_POST['nama'] ?? ''; // Mengambil nama, atau teks kosong jika tidak dikirim.
$nim = $_POST['nim'] ?? ''; // Mengambil NIM sebagai teks agar nol di awal tetap ada.
$email = $_POST['email'] ?? ''; // Mengambil email, atau teks kosong jika tidak dikirim.
$nama = is_string($nama) ? trim($nama) : ''; // Membersihkan spasi dan menolak input berbentuk array.
$nim = is_string($nim) ? trim($nim) : ''; // Membersihkan spasi pada NIM dan memastikan nilainya teks.
$email = is_string($email) ? trim($email) : ''; // Membersihkan spasi pada email dan memastikan nilainya teks.

if (!preg_match('/^.{1,100}$/us', $nama) || !preg_match('/^.{1,20}$/us', $nim)) { // Memeriksa isian wajib dan panjang sesuai kolom database.
    http_response_code(422); // Menandai bahwa isian belum valid.
    exit('Nama wajib diisi (maksimal 100 karakter) dan NIM wajib diisi (maksimal 20 karakter). <a href="form.html">Kembali ke form</a>.'); // Meminta pengguna memperbaiki isian.
} // Menutup pemeriksaan nama dan NIM.

if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) { // Memeriksa panjang dan format email di server.
    http_response_code(422); // Menandai email belum valid.
    exit('Isi email yang valid, maksimal 254 karakter. <a href="form.html">Kembali ke form</a>.'); // Menghentikan penyimpanan email yang tidak valid.
} // Menutup pemeriksaan email.

try { // Menjalankan koneksi dan penyimpanan dengan penanganan kesalahan.
    $pdo = require __DIR__ . '/../koneksi.php'; // Mengambil objek PDO dari file koneksi.
    $query = $pdo->prepare('INSERT INTO mahasiswa (nama, nim, email) VALUES (:nama, :nim, :email)'); // Menyiapkan SQL dengan tempat untuk nilai isian.
    $query->execute(['nama' => $nama, 'nim' => $nim, 'email' => $email]); // Mengirim nilai secara terpisah dari SQL dan menyimpan satu mahasiswa.
    echo '<h1>Data mahasiswa berhasil disimpan</h1>'; // Menampilkan sukses setelah query berhasil.
    echo '<p>Nama: ' . htmlspecialchars($nama, ENT_QUOTES, 'UTF-8') . '</p>'; // Menampilkan nama sebagai teks yang aman untuk HTML.
    echo '<p>NIM: ' . htmlspecialchars($nim, ENT_QUOTES, 'UTF-8') . '</p>'; // Menampilkan NIM sebagai teks yang aman untuk HTML.
    echo '<p>Email: ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>'; // Menampilkan email sebagai teks yang aman untuk HTML.
    echo '<a href="form.html">Tambah mahasiswa lain</a>'; // Memberi tautan untuk mengisi form kembali.
} catch (PDOException $error) { // Menangani kegagalan koneksi atau perintah database.
    if (($error->errorInfo[1] ?? null) === 1062) { // Mengenali pelanggaran nilai unik, misalnya NIM yang sudah terdaftar.
        http_response_code(409); // Menandai konflik dengan data yang sudah ada.
        echo 'NIM sudah terdaftar. <a href="form.html">Kembali ke form</a>.'; // Meminta pengguna memakai NIM yang belum terdaftar.
    } else { // Menangani kesalahan database lainnya.
        http_response_code(500); // Menandai kegagalan pada server.
        error_log('Penyimpanan mahasiswa gagal: ' . $error->getCode()); // Mencatat kode kesalahan tanpa password atau isian pribadi.
        echo 'Data belum tersimpan. Periksa koneksi dan tabel database. <a href="form.html">Kembali ke form</a>.'; // Menampilkan pesan gagal umum.
    } // Menutup pemilihan pesan kesalahan.
} // Menutup penanganan kesalahan.
