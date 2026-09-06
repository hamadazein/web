import { icon, escapeHTML as e, toast } from "./ui.mjs";

const presets = {
  welcome: {
    name: "Halo, dunia!",
    description:
      "Ubah judul dan warna latar. Lihat bagaimana beberapa baris kode bisa menjadi sesuatu.",
    html: '<section class="dream">\n  <span class="flower">✳</span>\n  <h1>Halo, dunia!</h1>\n  <p>Aku siap berkarya.</p>\n  <a href="#">Ini langkah pertamaku ↗</a>\n</section>',
    css: "body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: system-ui, sans-serif;\n  background: #f7f9f8;\n  color: #172b26;\n}\n\n.dream {\n  padding: 48px 32px;\n  margin: 24px;\n  background: #d9f4e8;\n  border-radius: 16px;\n  text-align: center;\n}\n\n.flower { font-size: 64px; color: #087c5c; }\nh1 { font-size: 36px; letter-spacing: -1px; }\np { color: #586760; }\na { color: #087c5c; font-weight: 600; }",
  },
  profile: {
    name: "Kartu profil pertamamu",
    description:
      "Ganti nama, tulis minatmu, lalu beri kartu ini gaya yang paling mencerminkan dirimu.",
    html: '<article class="profile">\n  <div class="avatar">N</div>\n  <span class="status">Terbuka untuk belajar</span>\n  <h1>Nadia Putri</h1>\n  <p>Calon web developer. Suka desain, kopi,\n  dan mencoba hal-hal baru.</p>\n  <div class="skills">\n    <span>HTML</span><span>CSS</span>\n  </div>\n  <a href="https://github.com" target="_blank" rel="noopener">Kenali karyaku ↗</a>\n</article>',
    css: "body {\n  margin: 0; min-height: 100vh;\n  display: grid; place-items: center;\n  background: #edf3ee;\n  font-family: system-ui, sans-serif;\n  color: #172b26;\n}\n.profile {\n  background: white; text-align: center;\n  padding: 36px; margin: 20px; border-radius: 16px;\n}\n.avatar {\n  width: 72px; height: 72px; border-radius: 50%;\n  background: #d9f4e8; color: #087c5c;\n  display: grid; place-items: center;\n  font-size: 32px; margin: 0 auto 20px;\n}\n.status { font-size: 12px; color: #087c5c; }\nh1 { margin-bottom: 8px; }\np { color: #586760; line-height: 1.7; }\n.skills { display: flex; gap: 8px; justify-content: center; margin: 24px; }\n.skills span { background: #edf3ee; padding: 6px 12px; border-radius: 6px; }\na { color: #087c5c; font-weight: 600; }",
  },
  layout: {
    name: "Layout yang ikut beradaptasi",
    description:
      "Ubah ukuran layar pratinjau. Eksperimen dengan jumlah kolom dan jarak antar-item.",
    html: '<main>\n  <h1>Ruang untuk ide.</h1>\n  <p>Setiap kotak, satu kemungkinan baru.</p>\n  <div class="grid">\n    <article>01<br><strong>Belajar</strong></article>\n    <article>02<br><strong>Mencoba</strong></article>\n    <article>03<br><strong>Berkarya</strong></article>\n    <article>04<br><strong>Berbagi</strong></article>\n  </div>\n</main>',
    css: "body {\n  margin: 0; padding: 32px;\n  font-family: system-ui, sans-serif;\n  color: #172b26; background: #f7f9f8;\n}\nh1 { font-size: 32px; letter-spacing: -1px; }\np { color: #586760; }\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 16px; margin-top: 32px;\n}\narticle {\n  padding: 24px; border-radius: 12px;\n  background: #d9f4e8; line-height: 2;\n}\narticle:nth-child(2) { background: #ece4ff; }\narticle:nth-child(3) { background: #ffe5d2; }\narticle:nth-child(4) { background: #e3f4fa; }",
  },
};
const draftKey = "weblab.playground.v1";

export function playgroundView(project) {
  const selected = Object.hasOwn(presets, project) ? project : "welcome";
  const preset = presets[selected];
  return `<div class="page-content playground-view"><div class="page-intro compact"><span class="intro-icon">${icon("code")}</span><h1>Tempat idemu jadi nyata.</h1><p>Ubah kode. Lihat hasilnya. Temukan “oh, ternyata!” versimu.</p></div><div class="playground-intro"><label>Pilih eksperimen<select id="project-select">${Object.entries(
    presets,
  )
    .map(
      ([key, value]) =>
        `<option value="${key}" ${key === selected ? "selected" : ""}>${value.name}</option>`,
    )
    .join(
      "",
    )}</select></label><p>${preset.description}</p></div><div class="playground-toolbar"><div class="editor-tabs" role="tablist" aria-label="Bahasa kode"><button role="tab" id="html-tab" aria-selected="true" aria-controls="html-panel" data-editor="html">${icon("code")} HTML</button><button role="tab" id="css-tab" aria-selected="false" aria-controls="css-panel" tabindex="-1" data-editor="css">{ } CSS</button></div><div class="playground-actions"><button class="icon-button" id="reset-code" aria-label="Reset kode" title="Reset kode">${icon("reset")}</button><button class="icon-button" id="download-code" aria-label="Unduh HTML" title="Unduh HTML">${icon("download")}</button><button class="button primary" id="run-code">${icon("play")} Jalankan kode</button></div></div><div class="playground-workspace"><section class="code-pane" aria-label="Editor kode"><div id="html-panel" role="tabpanel" aria-labelledby="html-tab"><label class="sr-only" for="html-code">Kode HTML</label><textarea id="html-code" spellcheck="false" autocapitalize="off" autocomplete="off" wrap="off"></textarea></div><div id="css-panel" role="tabpanel" aria-labelledby="css-tab" hidden><label class="sr-only" for="css-code">Kode CSS</label><textarea id="css-code" spellcheck="false" autocapitalize="off" autocomplete="off" wrap="off"></textarea></div><div class="editor-bottom"><span id="draft-status" role="status">Draft tersimpan di browser</span><span>Ctrl + Enter untuk menjalankan</span></div></section><section class="output-pane" aria-label="Hasil kode"><div class="output-toolbar"><span><i></i> Pratinjau</span><div role="group" aria-label="Ukuran pratinjau"><button class="preview-size selected" data-width="full" aria-pressed="true">Desktop</button><button class="preview-size" data-width="mobile" aria-pressed="false">Ponsel</button></div></div><div class="iframe-wrap"><iframe title="Hasil kode HTML dan CSS" id="playground-preview" sandbox="" referrerpolicy="no-referrer"></iframe></div></section></div><div class="playground-tip">${icon("spark")} <p><strong>Ruang untuk bereksperimen.</strong> HTML dan CSS berjalan di pratinjau terisolasi. Tautan, skrip, dan sumber eksternal dibatasi. Gunakan tombol unduh untuk membuka hasil lengkap.</p></div><dialog id="reset-dialog" aria-labelledby="reset-title"><form method="dialog"><div class="dialog-heading"><h2 id="reset-title">Mulai ulang eksperimen?</h2></div><p>Perubahan kode pada eksperimen ini akan diganti dengan contoh awal.</p><div class="dialog-actions"><button class="button subtle" value="cancel">Tetap mengedit</button><button class="button primary" value="reset">Reset ke contoh awal</button></div></form></dialog></div>`;
}

export function initPlayground(project, signal) {
  const selected = Object.hasOwn(presets, project) ? project : "welcome";
  const preset = presets[selected];
  const html = document.querySelector("#html-code");
  const css = document.querySelector("#css-code");
  let draft = null;
  try {
    draft = JSON.parse(localStorage.getItem(`${draftKey}.${selected}`));
  } catch {
    /* Start with a valid preset. */
  }
  html.value = typeof draft?.html === "string" ? draft.html : preset.html;
  css.value = typeof draft?.css === "string" ? draft.css : preset.css;
  const source = (restricted) =>
    `<!doctype html><html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">${restricted ? `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:; base-uri 'none'; form-action 'none';">` : ""}<title>${e(preset.name)}</title><style>${css.value.replace(/<\/style/gi, "<\\/style")}</style></head><body>${html.value}</body></html>`;
  const save = () => {
    try {
      localStorage.setItem(
        `${draftKey}.${selected}`,
        JSON.stringify({ html: html.value, css: css.value }),
      );
      document.querySelector("#draft-status").textContent =
        "Draft tersimpan di browser";
    } catch {
      document.querySelector("#draft-status").textContent =
        "Penyimpanan tidak tersedia. Unduh untuk menyimpan.";
    }
  };
  const run = (announce = true) => {
    document.querySelector("#playground-preview").srcdoc = source(true);
    save();
    if (announce) toast("Pratinjau diperbarui. Lihat hasil karyamu!");
  };
  run(false);
  document.querySelectorAll("[data-editor]").forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        document.querySelectorAll("[data-editor]").forEach((tab) => {
          const active = tab === button;
          tab.setAttribute("aria-selected", String(active));
          tab.tabIndex = active ? 0 : -1;
          document.querySelector(`#${tab.dataset.editor}-panel`).hidden =
            !active;
        });
      },
      { signal },
    ),
  );
  document.querySelector(".editor-tabs").addEventListener(
    "keydown",
    (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const target = document.querySelector(
          `[data-editor="${event.target.dataset.editor === "html" ? "css" : "html"}"]`,
        );
        target.click();
        target.focus();
      }
    },
    { signal },
  );
  document
    .querySelector("#run-code")
    .addEventListener("click", () => run(), { signal });
  document
    .querySelectorAll("textarea")
    .forEach((input) => input.addEventListener("input", save, { signal }));
  document.addEventListener(
    "keydown",
    (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        run();
      }
    },
    { signal },
  );
  document.querySelector("#project-select").addEventListener(
    "change",
    (event) => {
      location.hash = `#/playground?project=${event.target.value}`;
    },
    { signal },
  );
  document.querySelectorAll("[data-width]").forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        document
          .querySelector(".iframe-wrap")
          .classList.toggle(
            "mobile-preview",
            button.dataset.width === "mobile",
          );
        document.querySelectorAll("[data-width]").forEach((item) => {
          item.classList.toggle("selected", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });
      },
      { signal },
    ),
  );
  const dialog = document.querySelector("#reset-dialog");
  document
    .querySelector("#reset-code")
    .addEventListener("click", () => dialog.showModal(), { signal });
  dialog.addEventListener(
    "close",
    () => {
      if (dialog.returnValue === "reset") {
        html.value = preset.html;
        css.value = preset.css;
        run();
      }
    },
    { signal },
  );
  document.querySelector("#download-code").addEventListener(
    "click",
    () => {
      const url = URL.createObjectURL(
        new Blob([source(false)], { type: "text/html" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `weblab-${selected}.html`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast("Karyamu diunduh sebagai file HTML.");
    },
    { signal },
  );
}
