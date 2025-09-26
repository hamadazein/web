# Audio HTML

## Apa itu audio HTML?

Audio HTML menggunakan elemen `<audio>` untuk memutar suara di peramban. Umumnya didukung beberapa format, seperti:

- OGG
- MP3
- WAV

Dua elemen yang terlibat:

- `<audio>`: elemen utama untuk pemutar audio
- `<source>`: menentukan berkas audio dan tipe/formatnya

Atribut umum pada `<audio>`:

- `autoplay`: memutar otomatis saat siap
- `muted`: membisukan audio saat diputar
- `controls`: menampilkan kontrol pemutar (play/pause, volume, dsb.)

## Contoh sederhana

```html
<audio>
  <source src="" type="" />
</audio>
```

### Penjelasan

- `src`: sumber berkas audio
- `type`: tipe/format audio

### Penerapan

```html
<audio controls autoplay>
  <source src="" type="audio/mp3" />
</audio>
```

## Contoh penggunaan

```html
<!-- Penjelasan -->
<!-- Atribut controls = menampilkan kontrol pada audio -->
<!-- Atribut autoplay = memulai pemutaran secara otomatis  -->
<!-- src = sumber audio (horse.ogg) -->
<!-- type = tipe/format audio (audio/ogg) -->
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg" />
</audio>
```

## Referensi

Materi audio HTML: https://www.w3schools.com/html/html5_audio.asp
