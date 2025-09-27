# Bootstrap Introduction

Bootstrap adalah framework front-end yang paling populer untuk mengembangkan website responsif dan mobile-first. Bootstrap menyediakan komponen-komponen siap pakai yang memudahkan developer dalam membuat website yang cepat dan konsisten.

## Apa itu Bootstrap?

Bootstrap adalah framework CSS dan JavaScript yang dibuat oleh Tim Otto dan Jacob Thornton di Twitter. Framework ini menyediakan:
- Grid system yang responsif
- Komponen UI siap pakai
- Utilitas CSS yang powerful
- JavaScript plugins yang interaktif

## Keunggulan Bootstrap

### 1. **Mobile-First Approach**
Bootstrap dirancang dengan pendekatan mobile-first, artinya desain dimulai dari layar kecil kemudian dikembangkan ke layar yang lebih besar.

### 2. **Grid System yang Powerful**
Sistem grid Bootstrap memungkinkan pembuatan layout yang fleksibel dengan 12 kolom yang dapat disesuaikan.

### 3. **Komponen Siap Pakai**
Tersedia berbagai komponen seperti navbar, cards, modals, buttons, forms, dan masih banyak lagi.

### 4. **Cross-Browser Compatible**
Bootstrap mendukung semua browser modern dan memastikan konsistensi tampilan di berbagai platform.

### 5. **Customizable**
Bootstrap dapat dikustomisasi sesuai kebutuhan dengan Sass variables dan mixins.

## Versi Bootstrap

- **Bootstrap 3.x** - Versi lama yang masih banyak digunakan
- **Bootstrap 4.x** - Versi dengan flexbox dan improved grid system
- **Bootstrap 5.x** - Versi terbaru tanpa jQuery dependency

## Cara Menggunakan Bootstrap

### 1. **Via CDN (Recommended untuk belajar)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-primary">Hello Bootstrap!</h1>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 2. **Download Bootstrap**
Unduh file Bootstrap dari website resmi dan include dalam project.

### 3. **Via Package Manager**
```bash
npm install bootstrap
```

## Struktur Dasar Bootstrap

Bootstrap menggunakan sistem yang terdiri dari:

### Container
Wrapper untuk konten dengan responsive fixed-width:
```html
<div class="container">
    <!-- Konten disini -->
</div>

<!-- Atau full-width -->
<div class="container-fluid">
    <!-- Konten full-width -->
</div>
```

### Row dan Column
Sistem grid menggunakan row dan column:
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Kolom 1</div>
        <div class="col-md-6">Kolom 2</div>
    </div>
</div>
```

## Contoh Sederhana

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Starter Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center text-primary">Selamat Datang di Bootstrap</h1>
                <p class="lead text-center">Framework CSS yang powerful untuk website responsif</p>
            </div>
        </div>
        
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Responsif</h5>
                        <p class="card-text">Otomatis menyesuaikan dengan ukuran layar</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Mudah Digunakan</h5>
                        <p class="card-text">Komponen siap pakai dan dokumentasi lengkap</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Populer</h5>
                        <p class="card-text">Digunakan oleh jutaan developer di seluruh dunia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Langkah Selanjutnya

Setelah memahami dasar Bootstrap, Anda dapat mempelajari:

1. **Grid System** - Sistem layout yang fleksibel
2. **Typography** - Styling text dan heading
3. **Colors & Utilities** - Sistem warna dan utilitas
4. **Components** - Komponen-komponen UI
5. **JavaScript Plugins** - Interaktivitas dengan JavaScript

## Kesimpulan

Bootstrap adalah framework yang sangat powerful untuk membuat website responsif dengan cepat. Dengan memahami konsep dasar ini, Anda sudah siap untuk mempelajari fitur-fitur Bootstrap yang lebih advanced.