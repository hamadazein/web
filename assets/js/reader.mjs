import { marked } from "../vendor/marked.mjs";
import DOMPurify from "../vendor/purify.mjs";
import { icon, escapeHTML as e, lessonLink, toast } from "./ui.mjs";
import { lessonContinuation } from "./promotion.mjs";

export function readerView(lesson, catalog, state) {
  const course = catalog.courses.find((item) => item.id === lesson.course);
  const items = catalog.lessons.filter((item) => item.course === lesson.course);
  const index = items.findIndex((item) => item.id === lesson.id);
  const done = state.completed.includes(lesson.id);
  return `<div class="reader-view"><div class="reader-top"><a class="back-link" href="#/courses/${course.id}">${icon("back")} ${course.name}</a><span>Materi ${index + 1} dari ${items.length}</span><button class="button subtle" id="reader-focus" aria-pressed="false">${icon("book")} Mode fokus</button></div><div class="reader-layout"><details class="lesson-outline"><summary aria-label="Daftar materi ${e(course.name)}">${icon("book")}<span>Daftar materi</span><span class="outline-count">${items.length} materi</span>${icon("chevron")}</summary><nav>${items.map((item, position) => `<a href="${lessonLink(item)}" ${item.id === lesson.id ? 'aria-current="page"' : ""}><span class="outline-number">${state.completed.includes(item.id) ? icon("check") : String(position + 1).padStart(2, "0")}</span>${e(item.title.replace(new RegExp(`^${course.name} `, "i"), ""))}</a>`).join("")}</nav></details><div class="reader-content"><header class="lesson-header"><div class="lesson-kicker"><span class="tag ${course.id}">${course.name}</span><span>${icon("clock")} ${lesson.minutes} menit baca</span><span>${course.level}</span></div><h1>${e(lesson.title)}</h1><div class="lesson-toolbar"><button class="button subtle" id="reader-save" data-bookmark="${lesson.id}" aria-label="${state.saved.includes(lesson.id) ? "Hapus simpanan" : "Simpan materi"}" aria-pressed="${state.saved.includes(lesson.id)}">${icon("bookmark")} ${state.saved.includes(lesson.id) ? "Tersimpan" : "Simpan materi"}</button>${lesson.demo ? `<a class="button subtle" href="${encodeURI(lesson.demo)}" target="_blank" rel="noopener">${icon("external")} Buka contoh<span class="sr-only"> di tab baru</span></a>` : ""}<a class="button subtle" href="#/playground">${icon("code")} Coba kode</a></div></header><article class="lesson-article" aria-busy="true"><div class="reader-skeleton" aria-label="Memuat materi"><i></i><i></i><i></i><i></i></div></article><section class="lesson-completion" hidden><div><span class="completion-symbol">${icon("check")}</span><h2>Satu konsep baru. Satu langkah maju.</h2><p>Sudah memahami materi ini? Catat langkahmu dan lanjutkan.</p></div><button class="button primary" id="complete-lesson" aria-pressed="${done}">${icon("check")} ${done ? "Materi selesai" : "Tandai selesai"}</button></section><nav class="lesson-pagination" aria-label="Navigasi materi">${index > 0 ? `<a href="${lessonLink(items[index - 1])}">${icon("back")}<span><small>Sebelumnya</small>${e(items[index - 1].title)}</span></a>` : "<span></span>"}${index < items.length - 1 ? `<a href="${lessonLink(items[index + 1])}"><span><small>Berikutnya</small>${e(items[index + 1].title)}</span>${icon("arrow")}</a>` : '<a href="#/roadmap">Pilih jalur berikutnya ' + icon("arrow") + "</a>"}</nav>${lesson.id === "backend-001" ? lessonContinuation() : ""}</div></div></div>`;
}

export async function loadLesson(lesson, catalog, signal) {
  const article = document.querySelector(".lesson-article");
  try {
    const response = await fetch(encodeURI(lesson.path), { signal });
    if (!response.ok) throw Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    if (signal.aborted) return;
    article.innerHTML = DOMPurify.sanitize(marked.parse(markdown), {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["style", "input", "button", "textarea", "form"],
    });
    article.removeAttribute("aria-busy");
    // The page header already supplies the lesson title. Preserve Markdown sections at h2+.
    const first = article.firstElementChild;
    if (first?.tagName === "H1") first.remove();
    article.querySelectorAll("h1").forEach((heading) => {
      const replacement = document.createElement("h2");
      replacement.innerHTML = heading.innerHTML;
      heading.replaceWith(replacement);
    });
    const base = new URL(lesson.path, document.baseURI);
    const site = new URL(".", document.baseURI);
    article.querySelectorAll("img").forEach((image) => {
      const source = image.getAttribute("src");
      if (source) image.src = new URL(source, base).href;
      image.loading = "lazy";
      image.decoding = "async";
      image.alt ||= "Ilustrasi materi";
    });
    article.querySelectorAll("a[href]").forEach((link) => {
      const raw = link.getAttribute("href");
      if (raw.startsWith("#")) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const target = article.querySelector(
            `[id="${CSS.escape(raw.slice(1))}"]`,
          );
          if (target) target.scrollIntoView({ block: "start" });
        });
        return;
      }
      const url = new URL(raw, base);
      const targetLesson = catalog.lessons.find(
        (item) => new URL(item.path, site).href === url.href,
      );
      if (targetLesson) link.href = lessonLink(targetLesson);
      else {
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute(
          "aria-label",
          `${link.textContent.trim() || "Buka sumber"} (tab baru)`,
        );
      }
    });
    let headingNumber = 0;
    article.querySelectorAll("h2,h3,h4").forEach((heading) => {
      heading.id ||=
        heading.textContent
          .toLowerCase()
          .replace(/[^\p{L}\p{N}\s-]/gu, "")
          .trim()
          .replace(/\s+/g, "-") || `bagian-${++headingNumber}`;
    });
    article.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-scroll";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "region");
      wrapper.setAttribute(
        "aria-label",
        "Tabel materi, gulir untuk melihat semua kolom",
      );
      table.before(wrapper);
      wrapper.append(table);
    });
    article.querySelectorAll("pre").forEach((pre) => {
      const code = pre.querySelector("code");
      if (!code) return;
      const shell = document.createElement("div");
      shell.className = "code-block";
      const label = code.className.replace("language-", "") || "kode";
      const toolbar = document.createElement("div");
      toolbar.className = "code-toolbar";
      toolbar.innerHTML = `<span>${e(label)}</span><button class="copy-code" aria-label="Salin kode ${e(label)}">${icon("copy")} Salin</button>`;
      toolbar.querySelector("button").addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          toast("Kode disalin. Saatnya mencoba!");
        } catch {
          const selection = getSelection();
          const range = document.createRange();
          range.selectNodeContents(code);
          selection.removeAllRanges();
          selection.addRange(range);
          toast("Kode dipilih. Tekan Ctrl+C untuk menyalin.");
        }
      });
      pre.before(shell);
      shell.append(toolbar, pre);
    });
    document.querySelector(".lesson-completion").hidden = false;
  } catch (error) {
    if (error.name === "AbortError") return;
    article.removeAttribute("aria-busy");
    article.innerHTML = `<div class="inline-error" role="alert"><h2>Materi belum bisa dimuat.</h2><p>Periksa koneksi, lalu coba buka kembali. Progresmu tetap tersimpan.</p><button class="button primary" id="retry-lesson">Coba lagi ${icon("reset")}</button></div>`;
    article
      .querySelector("#retry-lesson")
      .addEventListener("click", () => loadLesson(lesson, catalog, signal));
  }
}
