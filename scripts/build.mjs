import {
  readdir,
  readFile,
  writeFile,
  mkdir,
  copyFile,
} from "node:fs/promises";
import path from "node:path";

const courses = [
  {
    id: "html",
    name: "HTML",
    label: "Fondasi web",
    description: "Bangun struktur. Wujudkan halaman pertamamu.",
    detail:
      "Kenali struktur halaman, teks, media, formulir, dan elemen semantik. Mulai dari nol, satu konsep setiap langkah.",
    folder: ".",
    symbol: "</>",
    level: "Pemula",
  },
  {
    id: "css",
    name: "CSS",
    label: "Desain & layout",
    description: "Beri karakter. Buat setiap piksel berarti.",
    detail:
      "Ubah struktur menjadi pengalaman visual. Pelajari warna, tipografi, Flexbox, Grid, hingga animasi dan desain responsif.",
    folder: "CSS-Materials",
    symbol: "{ }",
    level: "Pemula",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    label: "Utility-first",
    description: "Rangkai utility. Bangun lebih leluasa.",
    detail:
      "Eksplorasi pendekatan utility-first, komponen, layout, dan pengoptimalan proyek Tailwind. Materi ini menggunakan Tailwind v3.",
    folder: "Tailwind-Materials",
    symbol: "≈",
    level: "Menengah",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    label: "Komponen siap pakai",
    description: "Susun komponen. Percepat ide besarmu.",
    detail:
      "Pelajari fondasi Bootstrap dan sistem grid untuk membangun halaman yang responsif dengan komponen siap pakai.",
    folder: "Bootstrap-Materials",
    symbol: "B",
    level: "Menengah",
  },
  {
    id: "backend",
    name: "Form, PHP & Database",
    label: "Materi lanjutan",
    description: "Pahami bagaimana isian form menjadi data tersimpan.",
    detail:
      "Setelah HTML, CSS, Bootstrap, dan Tailwind, kenali peran PHP, koneksi database, dan alur penyimpanan data melalui teori sederhana serta contoh pendaftaran mahasiswa.",
    folder: "Backend-Materials",
    symbol: "DB",
    level: "Pengantar",
  },
];
const lessons = [];
for (const course of courses) {
  const directories = (await readdir(course.folder, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && /^\d{3} /.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));
  if (course.id === "html")
    directories.push({ name: "CSS-Materials/013 HTML CSS" });
  const seen = new Set();
  for (const directory of directories) {
    const folder = path.posix.join(course.folder, directory.name);
    const name = path.posix.basename(folder);
    if (course.id === "css" && name.includes("HTML CSS")) continue;
    const number = name.slice(0, 3);
    if (seen.has(number)) continue;
    const files = await readdir(folder);
    const readme = files.find((file) => /^readme\.md$/i.test(file));
    if (!readme) continue;
    const source = path.posix.join(folder, readme);
    const markdown = await readFile(source, "utf8");
    if (!markdown.trim()) continue;
    seen.add(number);
    const title = name.replace(/^\d{3} /, "");
    const paragraphs = markdown.split(/\r?\n\s*\r?\n/);
    const description = (
      paragraphs.find(
        (paragraph) =>
          !/^[#`!|\[<\-*\d]/.test(paragraph.trim()) &&
          paragraph.trim().length > 35,
      ) || `Pelajari ${title} melalui penjelasan dan contoh kode.`
    )
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`>#]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    lessons.push({
      id: `${course.id}-${number}`,
      course: course.id,
      number: Number(number),
      title,
      description: description.slice(0, 170),
      path: source,
      minutes: Math.max(2, Math.ceil(markdown.split(/\s+/).length / 170)),
      demo: files.find((file) => file.toLowerCase().endsWith(".html"))
        ? path.posix.join(
            folder,
            files.find((file) => file.toLowerCase().endsWith(".html")),
          )
        : null,
    });
  }
}
lessons.sort(
  (a, b) =>
    courses.findIndex((course) => course.id === a.course) -
      courses.findIndex((course) => course.id === b.course) ||
    a.number - b.number,
);
for (const folder of ["assets/data", "assets/vendor", "assets/fonts"])
  await mkdir(folder, { recursive: true });
await writeFile(
  "assets/data/catalog.json",
  JSON.stringify({ courses, lessons }, null, 2) + "\n",
);
await Promise.all([
  copyFile("node_modules/marked/lib/marked.esm.js", "assets/vendor/marked.mjs"),
  copyFile(
    "node_modules/dompurify/dist/purify.es.mjs",
    "assets/vendor/purify.mjs",
  ),
  copyFile(
    "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
    "assets/fonts/inter-latin-variable.woff2",
  ),
  copyFile("node_modules/marked/LICENSE", "assets/vendor/marked-LICENSE.md"),
  copyFile(
    "node_modules/dompurify/LICENSE",
    "assets/vendor/dompurify-LICENSE.txt",
  ),
  copyFile(
    "node_modules/@fontsource-variable/inter/LICENSE",
    "assets/fonts/inter-LICENSE.txt",
  ),
]);
console.log(
  `Built Weblab: ${lessons.length} lessons across ${courses.length} paths. Local fonts and Markdown dependencies ready.`,
);
