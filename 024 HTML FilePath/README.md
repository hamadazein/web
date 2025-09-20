# Jalur Berkas pada HTML (File Path)

File path menjelaskan lokasi berkas, gambar, dan sebagainya—yakni struktur folder pada situs web.

## Contoh

### File HTML dan Berkas Lainnya di Lokasi yang Sama

```html
<img src="gambar_pemandangan.jpg">
```

Artinya, berkas gambar terletak pada lokasi yang sama dengan file HTML.

```
📂HTML-CSS/
    ├── 📄index.html
    └── 🚞gambar_pemandangan.jpg
```

### File HTML Terpisah dan Berkas Lainnya dalam Folder Lain

```html
<img src="picture/gambar_saya.jpg">
```

Artinya, berkas tersebut berada pada folder `picture`.

```
📂HTML-CSS/
    ├── 📄index.html
    └── 📂Pictures/
        └── 🚞gambar_pemandangan.jpg
```

### File HTML Terpisah dan Berkas Lainnya dengan URL

```html
<img src="https://gambarsaya.url/gambar.jpg">
```

#### Contoh Selain Gambar

- Memanggil berkas CSS dan file HTML terpisah

    ```html
    <link rel="stylesheet" href="folder_lain/file.css" />
    ```

- Memanggil berkas JavaScript dan file HTML terpisah

    ```html
    <script src="folder_lain/file.js"></script>
    ```
