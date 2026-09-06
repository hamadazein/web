import { createStore } from "./state.mjs";
import { icon, escapeHTML as e, toast, emptyState } from "./ui.mjs";
import {
  homeView,
  catalogView,
  courseView,
  savedView,
  roadmapView,
  progressView,
  lessonRow,
} from "./views.mjs";
import { readerView, loadLesson } from "./reader.mjs";
import { playgroundView, initPlayground } from "./playground.mjs";

const store = createStore();
let catalog;
let routeController;
let initialRoute = true;
const titles = {
  home: "Beranda",
  catalog: "Jelajahi materi",
  courses: "Jalur belajar",
  lesson: "Ruang belajar",
  roadmap: "Alur belajar",
  playground: "Playground",
  saved: "Materi tersimpan",
  progress: "Progres belajarku",
};
const navigation = [
  { route: "home", label: "Beranda", icon: "home" },
  { route: "catalog", label: "Jelajahi materi", icon: "grid" },
  { route: "roadmap", label: "Alur belajar", icon: "route" },
  { route: "playground", label: "Playground", icon: "code" },
];

document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#main")?.focus();
  document.querySelector("#main")?.scrollIntoView({ block: "start" });
});

function sidebarContent(route) {
  const state = store.get();
  const completed = catalog.lessons.filter((lesson) =>
    state.completed.includes(lesson.id),
  ).length;
  const nav = (item) =>
    `<a href="#/${item.route}" class="nav-item ${route === item.route || (["courses", "lesson"].includes(route) && item.route === "catalog") ? "active" : ""}" ${route === item.route ? 'aria-current="page"' : ""}>${icon(item.icon)}<span>${item.label}</span>${item.route === "catalog" ? `<span class="nav-count">${catalog.lessons.length}</span>` : item.route === "playground" ? '<span class="nav-new">Coba</span>' : ""}</a>`;
  return `<a class="brand" href="#/home" aria-label="Weblab beranda"><span class="brand-mark" aria-hidden="true">w<span>↗</span></span><span>web<span class="brand-light">lab</span><span class="logo-dot">.</span></span></a><div class="sidebar-content"><div class="nav-section-label">Ruang eksplorasi</div><nav aria-label="Navigasi utama">${navigation.map(nav).join("")}</nav><div class="nav-section-label personal-label">Perjalananmu</div><nav aria-label="Navigasi pribadi">${nav({ route: "saved", label: "Materi tersimpan", icon: "bookmark" })}${nav({ route: "progress", label: "Progres belajarku", icon: "chart" })}</nav><div class="sidebar-progress"><div class="progress-heading"><span>Selangkah lebih jauh</span>${icon("leaf")}</div><p>${completed ? `${completed} materi sudah kamu pelajari. Teruskan langkah baikmu.` : "Tidak harus hebat untuk memulai. Mulai untuk jadi hebat."}</p><progress value="${completed}" max="${catalog.lessons.length}" aria-label="Progres semua materi"></progress><a href="#/progress">${completed} / ${catalog.lessons.length} materi selesai ${icon("arrow")}</a></div></div><div class="sidebar-bottom"><a href="https://github.com/hamadazein/web" target="_blank" rel="noopener" class="source-link">${icon("code")} Dibangun untuk berbagi ${icon("external")}<span class="sr-only"> (GitHub, tab baru)</span></a><div class="learner-profile"><span class="learner-avatar">${icon("spark")}</span><div><strong>Pembelajar</strong><span>Versi terbaikmu, dimulai di sini.</span></div></div></div>`;
}

function shell(route) {
  document.querySelector("#app").innerHTML =
    `<aside class="sidebar">${sidebarContent(route)}</aside><div class="workspace"><header class="topbar"><div class="topbar-location"><button class="icon-button mobile-menu-toggle" id="open-menu" aria-label="Buka navigasi">${icon("menu")}</button><span class="desktop-crumb">Ruang belajar ${icon("chevron")}</span><span>${titles[route] || "Weblab"}</span></div><div class="topbar-tools"><button class="global-search" id="global-search">${icon("search")}<span>Cari sesuatu untuk dipelajari</span><kbd>Ctrl K</kbd></button><span class="topbar-divider"></span><button class="icon-button" id="open-settings" aria-label="Pengaturan kenyamanan" title="Pengaturan kenyamanan">${icon("settings")}</button><span class="header-avatar" aria-label="Pembelajar tanpa akun">P</span></div></header><main id="main" tabindex="-1"></main></div><dialog id="mobile-nav" aria-label="Menu navigasi"><button class="icon-button close-nav" aria-label="Tutup navigasi">${icon("close")}</button>${sidebarContent(route)}</dialog><dialog id="settings-dialog" aria-labelledby="settings-title"><div class="dialog-heading"><div><span class="intro-icon">${icon("settings")}</span><h2 id="settings-title">Nyaman dengan caramu.</h2></div><button class="icon-button close-settings" aria-label="Tutup pengaturan">${icon("close")}</button></div><p>Sesuaikan ruang ini agar belajar terasa lebih nyaman.</p><label class="setting-row"><span><strong>Teks lebih besar</strong><small>Perbesar teks materi dan antarmuka.</small></span><input type="checkbox" id="large-text" ${store.get().preferences.largeText ? "checked" : ""}></label><label class="setting-row"><span><strong>Kurangi animasi</strong><small>Tampilan lebih tenang, tanpa transisi.</small></span><input type="checkbox" id="reduce-motion" ${store.get().preferences.reduceMotion ? "checked" : ""}></label><div class="settings-note">${icon("bookmark")} Preferensi dan progres disimpan di browser ini.</div><button class="button primary close-settings">Selesai ${icon("check")}</button></dialog>`;
  const menu = document.querySelector("#mobile-nav");
  document
    .querySelector("#open-menu")
    .addEventListener("click", () => menu.showModal());
  menu
    .querySelector(".close-nav")
    .addEventListener("click", () => menu.close());
  menu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => menu.close()));
  const settings = document.querySelector("#settings-dialog");
  document
    .querySelector("#open-settings")
    .addEventListener("click", () => settings.showModal());
  settings
    .querySelectorAll(".close-settings")
    .forEach((button) =>
      button.addEventListener("click", () => settings.close()),
    );
  [menu, settings].forEach((dialog) =>
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          dialog.close();
      }
    }),
  );
  document
    .querySelector("#global-search")
    .addEventListener("click", focusSearch);
  document
    .querySelector("#global-search")
    .setAttribute("aria-label", "Cari materi (Ctrl+K)");
  document.querySelector("#large-text").addEventListener("change", (event) => {
    store.preference("largeText", event.target.checked);
    applyPreferences();
  });
  document
    .querySelector("#reduce-motion")
    .addEventListener("change", (event) => {
      store.preference("reduceMotion", event.target.checked);
      applyPreferences();
    });
}

function applyPreferences() {
  document.documentElement.classList.toggle(
    "large-text",
    store.get().preferences.largeText,
  );
  document.documentElement.classList.toggle(
    "reduce-motion",
    store.get().preferences.reduceMotion,
  );
}

function focusSearch() {
  if (!location.hash.startsWith("#/catalog")) {
    location.hash = "#/catalog";
    window.addEventListener(
      "hashchange",
      () => document.querySelector("#catalog-search")?.focus(),
      { once: true },
    );
  } else document.querySelector("#catalog-search")?.focus();
}

function initCatalog(params) {
  let selected = catalog.courses.some(
    (course) => course.id === params.get("course"),
  )
    ? params.get("course")
    : "all";
  let visible = 20;
  const input = document.querySelector("#catalog-search");
  function update() {
    const query = input.value.trim().toLocaleLowerCase("id");
    const filtered = catalog.lessons.filter(
      (lesson) =>
        (selected === "all" || lesson.course === selected) &&
        `${lesson.title} ${lesson.description}`
          .toLocaleLowerCase("id")
          .includes(query),
    );
    document.querySelector("#result-count").textContent =
      `${filtered.length} materi ditemukan`;
    document.querySelector("#catalog-results").innerHTML = filtered.length
      ? `<div class="lesson-list">${filtered
          .slice(0, visible)
          .map((lesson) => lessonRow(lesson, store.get()))
          .join(
            "",
          )}</div>${filtered.length > visible ? `<button class="button subtle load-more" id="load-more">Tampilkan ${Math.min(20, filtered.length - visible)} materi berikutnya ${icon("arrow")}</button>` : ""}`
      : emptyState(
          "Materi belum ditemukan",
          "Coba kata yang lebih singkat atau pilih jalur belajar lainnya.",
          '<button class="button primary" id="clear-search">Hapus pencarian</button>',
          "search",
        );
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === selected);
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === selected),
      );
    });
    document.querySelector("#load-more")?.addEventListener("click", () => {
      visible += 20;
      update();
      document.querySelectorAll(".lesson-result a")[visible - 20]?.focus();
    });
    document.querySelector("#clear-search")?.addEventListener("click", () => {
      input.value = "";
      selected = "all";
      visible = 20;
      update();
      input.focus();
    });
    const searchParams = new URLSearchParams();
    if (query) searchParams.set("q", input.value.trim());
    if (selected !== "all") searchParams.set("course", selected);
    history.replaceState(
      null,
      "",
      `#/catalog${searchParams.size ? "?" + searchParams : ""}`,
    );
  }
  input.addEventListener("input", () => {
    visible = 20;
    update();
  });
  document.querySelectorAll("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      selected = button.dataset.filter;
      visible = 20;
      update();
    }),
  );
  update();
}

function wireBookmarks(route) {
  document.querySelector("#main").addEventListener("click", (event) => {
    const button = event.target.closest("[data-bookmark]");
    if (!button) return;
    const id = button.dataset.bookmark;
    store.bookmark(id);
    const saved = store.get().saved.includes(id);
    const lesson = catalog.lessons.find((item) => item.id === id);
    button.setAttribute("aria-pressed", String(saved));
    button.classList.toggle("saved", saved);
    if (button.id === "reader-save") {
      button.setAttribute(
        "aria-label",
        saved ? "Hapus simpanan" : "Simpan materi",
      );
      button.innerHTML = `${icon("bookmark")} ${saved ? "Tersimpan" : "Simpan materi"}`;
    } else
      button.setAttribute(
        "aria-label",
        `${saved ? "Hapus simpanan" : "Simpan"} ${lesson.title}`,
      );
    toast(
      saved ? "Materi disimpan untuk nanti." : "Materi dihapus dari simpanan.",
    );
    if (route === "saved") {
      const main = document.querySelector("#main");
      main.innerHTML = savedView(catalog, store.get());
      main.querySelector("h1").setAttribute("tabindex", "-1");
      main.querySelector("h1").focus({ preventScroll: true });
    }
  });
}

async function render() {
  if (location.hash === "#main") {
    document.querySelector("#main")?.focus();
    return;
  }
  routeController?.abort();
  routeController = new AbortController();
  const { signal } = routeController;
  const [path, search = ""] = location.hash.replace(/^#\/?/, "").split("?");
  const [route = "home", id] = (path || "home").split("/");
  const params = new URLSearchParams(search);
  shell(route);
  document.body.classList.remove("focus-reading");
  applyPreferences();
  const main = document.querySelector("#main");
  let state = store.get();
  let lesson;
  switch (route) {
    case "home":
      main.innerHTML = homeView(catalog, state);
      break;
    case "catalog":
      main.innerHTML = catalogView(
        catalog,
        state,
        params.get("q") || "",
        params.get("course") || "all",
      );
      initCatalog(params);
      break;
    case "courses": {
      const course = catalog.courses.find((item) => item.id === id);
      main.innerHTML = course
        ? courseView(course, catalog, state)
        : emptyState(
            "Jalur belum ditemukan",
            "Pilih salah satu jalur yang tersedia di katalog.",
          );
      break;
    }
    case "lesson": {
      lesson = catalog.lessons.find((item) => item.id === id);
      if (!lesson) {
        main.innerHTML = emptyState(
          "Materi belum ditemukan",
          "Tautan ini tidak cocok dengan materi yang tersedia. Cari kembali di katalog.",
        );
        break;
      }
      store.visit(lesson.id);
      main.innerHTML = readerView(lesson, catalog, state);
      document
        .querySelector("#reader-focus")
        .addEventListener("click", (event) => {
          const enabled = document.body.classList.toggle("focus-reading");
          event.currentTarget.setAttribute("aria-pressed", String(enabled));
          event.currentTarget.innerHTML = `${icon("book")} ${enabled ? "Keluar mode fokus" : "Mode fokus"}`;
        });
      document
        .querySelector("#complete-lesson")
        .addEventListener("click", (event) => {
          const completed = !store.get().completed.includes(id);
          store.complete(id, completed);
          event.currentTarget.innerHTML = `${icon("check")} ${completed ? "Materi selesai" : "Tandai selesai"}`;
          event.currentTarget.setAttribute("aria-pressed", String(completed));
          const current = document.querySelector(
            ".lesson-outline [aria-current] .outline-number",
          );
          if (current)
            current.innerHTML = completed
              ? icon("check")
              : String(
                  catalog.lessons
                    .filter((item) => item.course === lesson.course)
                    .findIndex((item) => item.id === id) + 1,
                ).padStart(2, "0");
          document.querySelector(".sidebar").innerHTML = sidebarContent(route);
          toast(
            completed
              ? "Satu langkah maju! Progresmu sudah dicatat."
              : "Materi ditandai untuk dipelajari kembali.",
          );
        });
      loadLesson(lesson, catalog, signal);
      break;
    }
    case "saved":
      main.innerHTML = savedView(catalog, state);
      break;
    case "roadmap":
      main.innerHTML = roadmapView(catalog, state);
      break;
    case "progress":
      main.innerHTML = progressView(catalog, state);
      break;
    case "playground":
      main.innerHTML = playgroundView(params.get("project"));
      initPlayground(params.get("project"), signal);
      break;
    default:
      main.innerHTML = emptyState(
        "Kita cari jalan kembali.",
        "Halaman ini tidak ditemukan. Ruang belajarmu tetap menunggu.",
        '<a class="button primary" href="#/home">Kembali ke beranda</a>',
      );
  }
  wireBookmarks(route);
  document.querySelectorAll("[data-color]").forEach((button) =>
    button.addEventListener("click", () => {
      document.querySelector("#hero-preview").style.backgroundColor =
        button.dataset.color;
      document.querySelector("#hero-color-code").textContent =
        button.dataset.color;
      document.querySelectorAll("[data-color]").forEach((item) => {
        item.classList.toggle("selected", item === button);
        item.setAttribute("aria-pressed", String(item === button));
      });
    }),
  );
  document.title = `${lesson?.title || titles[route] || "Ruang belajar"} — Weblab`;
  window.scrollTo(0, 0);
  if (!initialRoute) main.focus({ preventScroll: true });
  initialRoute = false;
}

document.addEventListener("keydown", (event) => {
  const editing =
    /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) ||
    document.activeElement?.isContentEditable;
  if (
    ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") ||
    (event.key === "/" && !editing)
  ) {
    event.preventDefault();
    document
      .querySelectorAll("dialog[open]")
      .forEach((dialog) => dialog.close());
    focusSearch();
  }
});

async function start() {
  try {
    const response = await fetch("assets/data/catalog.json");
    if (!response.ok) throw Error("Catalog unavailable");
    catalog = await response.json();
    await render();
    window.addEventListener("hashchange", render);
  } catch {
    document.querySelector("#app").innerHTML =
      `<main class="boot-screen"><h1>Ruang belajar belum bisa dibuka.</h1><p>Periksa koneksi atau jalankan situs lewat server lokal.</p><button class="button primary" id="retry-app">Coba lagi</button><a class="text-link" href="https://github.com/hamadazein/web">Buka materi di GitHub ${icon("external")}</a></main>`;
    document.querySelector("#retry-app").addEventListener("click", start);
  }
}
start();
