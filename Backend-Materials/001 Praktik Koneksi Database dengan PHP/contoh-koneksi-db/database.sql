-- Jalankan melalui phpMyAdmin atau klien MySQL dengan akun administrator.
CREATE DATABASE IF NOT EXISTS kampus_latihan CHARACTER SET utf8mb4;

USE kampus_latihan;

-- NIM disimpan sebagai teks agar angka nol di awal tidak hilang.
CREATE TABLE IF NOT EXISTS mahasiswa (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(254) NOT NULL
);

-- Jika tabel mahasiswa versi lama sudah ada tanpa kolom nim, gunakan
-- database latihan baru untuk contoh ini; CREATE TABLE tidak mengubah tabel lama.
