# Multimedia HTML

## Apa itu multimedia

Multimedia memiliki banyak format. Hampir semua hal yang dapat Anda dengar atau lihat termasuk multimedia: gambar, musik, suara, video, rekaman, film, animasi, dan banyak lagi.

## Format multimedia

Multimedia (seperti suara atau video) disimpan di berkas media. Cara paling umum untuk mengetahui jenis berkas adalah dengan melihat ekstensi berkas.

Berkas multimedia memiliki format dan ekstensi berbeda, misalnya: `.wav`, `.mp3`, `.mp4`, `.mpg`, `.wmv`, dan `.avi`.

## Format video

Ada banyak format video. Pada HTML, yang didukung umumnya adalah `MP4`, `WebM`, dan `Ogg`. YouTube merekomendasikan format `MP4`.

|     Format      |    File    | Deskripsi |
| :-------------: | :--------: | --------- |
|      MPEG       | .mpg .mpeg | Dikembangkan oleh Moving Pictures Expert Group. Format video pertama yang populer di web. Tidak lagi didukung oleh HTML. |
|       AVI       |    .avi    | Audio Video Interleave. Dikembangkan oleh Microsoft. Umum di kamera video dan perangkat TV. Diputar dengan baik di Windows, tetapi tidak di peramban web. |
|       WMV       |    .wmv    | Windows Media Video. Dikembangkan oleh Microsoft. Umum di kamera video dan perangkat TV. Diputar dengan baik di Windows, tetapi tidak di peramban web. |
|    QuickTime    |    .mov    | Dikembangkan oleh Apple. Umum di kamera video dan perangkat TV. Diputar dengan baik di komputer Apple, tetapi tidak di peramban web. |
|    RealVideo    |  .rm .ram  | Dikembangkan oleh Real Media untuk streaming video bandwidth rendah. Tidak dapat diputar di peramban web. |
|      Flash      | .swf .flv  | Dikembangkan oleh Macromedia. Sering memerlukan plug-in tambahan untuk diputar di peramban web. |
|       Ogg       |    .ogg    | Theora Ogg. Dikembangkan oleh Xiph.Org Foundation. Didukung oleh HTML. |
|      WebM       |   .webm    | Dikembangkan oleh Mozilla, Opera, Adobe, dan Google. Didukung oleh HTML. |
| MPEG-4 atau MP4 |    .mp4    | Dikembangkan oleh Moving Pictures Expert Group. Umum di kamera video dan perangkat TV. Didukung oleh semua peramban dan direkomendasikan oleh YouTube. |

### Contoh HTML

```html
<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Penjelasan

- `controls`: atribut video seperti tombol play, jeda, dan volume.
- `autoplay`: memulai video secara otomatis.

## Format audio

`MP3` adalah format yang baik untuk mengompresi berkas rekaman musik. Jika situs Anda berisi rekaman musik, `MP3` biasanya menjadi pilihan. Hanya audio berformat `MP3`, `WAV`, dan `Ogg` yang didukung oleh standar HTML.

Berikut beberapa format musik selain `MP3`:

|  Format   |    File    | Deskripsi |
| :-------: | :--------: | --------- |
|   MIDI    | .mid .midi | Musical Instrument Digital Interface. Format utama untuk perangkat musik elektronik seperti synthesizer dan kartu suara PC. Berkas MIDI tidak mengandung suara, melainkan not digital yang dimainkan secara elektronik. Diputar dengan baik di semua komputer dan perangkat musik, tetapi tidak di peramban web. |
| RealAudio |  .rm .ram  | Dikembangkan oleh Real Media untuk streaming audio bandwidth rendah. Tidak dapat diputar di peramban web. |
|    WMA    |    .wma    | Windows Media Audio. Dikembangkan oleh Microsoft. Diputar dengan baik di komputer Windows, tetapi tidak di peramban web. |
|    AAC    |    .aac    | Advanced Audio Coding. Dikembangkan oleh Apple sebagai format bawaan iTunes. Diputar dengan baik di komputer Apple, tetapi tidak di peramban web. |
|    WAV    |    .wav    | Dikembangkan oleh IBM dan Microsoft. Diputar dengan baik di Windows, macOS, dan Linux. Didukung oleh HTML. |
|    Ogg    |    .ogg    | Theora Ogg. Dikembangkan oleh Xiph.Org Foundation. Didukung oleh HTML. |
|    MP3    |    .mp3    | Format paling populer untuk pemutar musik. Menggabungkan kompresi yang baik (berkas kecil) dengan kualitas tinggi. Didukung oleh semua peramban. |
|    MP4    |    .mp4    | MP4 adalah format video, tetapi juga dapat digunakan untuk audio. Didukung oleh semua peramban. |

### Contoh HTML

```html
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

## Referensi

- [W3Schools](https://www.w3schools.com/html/html_media.asp)
