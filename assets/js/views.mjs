import {
  icon,
  escapeHTML as e,
  lessonLink,
  minutesLabel,
  emptyState,
} from "./ui.mjs";
import { getContinueLesson } from "./state.mjs";
import { platformLink } from "./promotion.mjs";

export function courseCard(course, lessons, state) {
  const items = lessons.filter((lesson) => lesson.course === course.id);
  const done = items.filter((lesson) =>
    state.completed.includes(lesson.id),
  ).length;
  return `<a href="#/courses/${course.id}" class="course-card ${course.id}">
    <div class="course-art"><span class="art-code" aria-hidden="true">${e(course.symbol)}</span><span class="course-level">${course.level}</span><span class="art-caption">${course.label}</span><span class="art-corner" aria-hidden="true">${icon("arrow")}</span></div>
    <div class="course-info"><h3>${course.name}</h3><p>${course.description}</p><div class="course-meta"><span>${icon("book")}${items.length} materi</span><span>${done ? `${done} selesai` : minutesLabel(items.reduce((sum, lesson) => sum + lesson.minutes, 0))}</span></div>${done ? `<progress value="${done}" max="${items.length}" aria-label="Progres ${course.name}"></progress>` : ""}</div>
  </a>`;
}

function upcomingCourseCard(course) {
  return `<article class="course-card is-upcoming ${e(course.id)}">
    <div class="course-art"><span class="art-code" aria-hidden="true">${e(course.symbol)}</span><span class="course-level">${e(course.level)}</span><span class="art-caption">${e(course.label)}</span></div>
    <div class="course-info"><h3>${e(course.name)}</h3><p>${e(course.description)}</p><div class="course-meta"><span class="upcoming-status"><span aria-hidden="true"></span>Segera hadir</span></div></div>
  </article>`;
}

export function homeView(catalog, state) {
  const next = getContinueLesson(catalog.lessons, state);
  const nextCourse = catalog.courses.find(
    (course) => course.id === next.course,
  );
  return `<div class="home-view page-content">
    <div class="welcome-line"><span>${icon("sun")} Selamat datang di ruang belajarmu</span><span class="free-label"><span></span> Gratis. Terbuka. Untuk semua.</span></div>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><span class="hero-label">DARI RASA INGIN TAHU, JADI BISA.</span><h1 id="hero-title">Langkah kecil.<br>Skill yang <span>besar.</span></h1><p>Belajar web dengan caramu. Pahami konsepnya,<br class="desktop-break"> coba kodenya, lalu buat sesuatu yang kamu banggakan.</p><div class="hero-actions"><a class="button primary" href="${lessonLink(next)}">${state.last ? "Lanjutkan belajar" : "Mulai perjalananmu"} ${icon("arrow")}</a><a class="hero-secondary" href="#/roadmap">Lihat alur belajar ${icon("chevron")}</a></div><div class="hero-note">${icon("check")} Tanpa akun <span>·</span> Bahasa Indonesia <span>·</span> Praktik langsung</div></div>
      <div class="hero-lab" aria-label="Demo interaktif: ganti warna pratinjau">
        <span class="lab-label label-html">${icon("code")} tulis idemu</span>
        <div class="mini-editor"><div class="mini-window"><span class="window-dots"><i></i><i></i><i></i></span><span>hello-world.html</span></div><pre><span class="line-number">1</span> <span class="syntax-pink">&lt;section</span> <span class="syntax-lime">class</span>=<span class="syntax-yellow">"dream"</span><span class="syntax-pink">&gt;</span>
<span class="line-number">2</span>   <span class="syntax-pink">&lt;h1&gt;</span>Halo, dunia!<span class="syntax-pink">&lt;/h1&gt;</span>
<span class="line-number">3</span>   <span class="syntax-pink">&lt;p&gt;</span>Aku siap berkarya.<span class="syntax-pink">&lt;/p&gt;</span>
<span class="line-number">4</span> <span class="syntax-pink">&lt;/section&gt;</span>
<span class="line-number">5</span>
<span class="line-number">6</span> <span class="syntax-lime">.dream</span> {
<span class="line-number">7</span>   background: <span class="syntax-yellow" id="hero-color-code">#d9f4e8</span>;
<span class="line-number">8</span> }</pre><div class="mini-editor-footer"><span><i></i> HTML + CSS</span><span>UTF-8</span></div></div>
        <div class="mini-preview"><div class="preview-browser"><span class="window-dots"><i></i><i></i><i></i></span><span>${icon("leaf")} ide-pertamaku.web</span>${icon("external")}</div><div class="preview-canvas" id="hero-preview"><span class="preview-flower" aria-hidden="true">✳</span><strong>Halo, dunia<span>!</span></strong><p>Aku siap berkarya.</p><a href="#/playground">Lihat karyaku ${icon("arrow")}</a></div><div class="preview-controls"><span>Coba ganti warna</span><div class="swatches" role="group" aria-label="Warna demo"><button class="swatch mint selected" data-color="#d9f4e8" aria-label="Warna mint" aria-pressed="true"></button><button class="swatch lavender" data-color="#ece4ff" aria-label="Warna lavender" aria-pressed="false"></button><button class="swatch peach" data-color="#ffe5d2" aria-label="Warna persik" aria-pressed="false"></button></div></div></div>
        <span class="lab-label label-preview">${icon("spark")} lihat jadi nyata</span>
      </div>
    </section>
    <section class="learning-paths" aria-labelledby="paths-title"><div class="section-heading"><div><h2 id="paths-title">Mau belajar apa hari ini?</h2><p>Dari fondasi pertama sampai website yang kamu impikan.</p></div><a class="text-link" href="#/catalog">Jelajahi semua ${icon("arrow")}</a></div><div class="course-grid">${catalog.courses.map((course) => courseCard(course, catalog.lessons, state)).join("")}${(catalog.upcomingCourses || []).map(upcomingCourseCard).join("")}</div></section>
    <div class="home-bottom"><section class="next-section" aria-labelledby="next-title"><div class="section-heading"><h2 id="next-title">${state.last ? "Lanjut dari langkah terakhirmu" : "Mulai dari yang paling dasar"}</h2>${icon("route")}</div><a class="next-lesson" href="${lessonLink(next)}"><span class="lesson-symbol ${next.course}">${e(nextCourse.symbol)}</span><div><span class="small-label">${nextCourse.name} · ${state.last ? (next.id === state.last ? "Terakhir dibuka" : "Langkah berikutnya") : "Langkah pertama"}</span><h3>${e(next.title)}</h3><p>${icon("clock")} ${next.minutes} menit baca <span>·</span> ${state.completed.includes(next.id) ? "Sudah selesai" : "Siap dipelajari"}</p></div><span class="round-arrow">${icon("arrow")}</span></a><div class="encouragement">${icon("leaf")} Sedikit setiap hari, jadi banyak suatu nanti.</div></section>
    <section class="practice-callout"><div class="practice-top"><span class="practice-symbol">${icon("code")}</span><span class="badge">Belajar sambil membuat</span></div><h2>Ide bagus dimulai<br>dari coba-coba.</h2><p>Tempat aman untuk bereksperimen.<br>Ubah kode, lihat hasilnya, ulangi.</p><a href="#/playground" class="text-link">Buka playground ${icon("arrow")}</a><span class="practice-braces" aria-hidden="true">{ }</span></section></div>
    <section class="project-section"><div class="section-heading"><div><h2>Dari “sudah paham” ke “sudah bikin”.</h2><p>Terapkan yang kamu pelajari lewat tantangan kecil.</p></div><span class="handy-note">Kecil proyeknya, besar rasanya.</span></div><div class="project-grid"><a class="project-item" href="#/playground?project=profile"><span class="project-thumbnail profile-art" aria-hidden="true"><span class="profile-dot"></span><i></i><i></i></span><div><span class="small-label">HTML + CSS · Pemula</span><h3>Kartu profil pertamamu</h3><p>Kenalkan dirimu lewat kode.</p></div>${icon("arrow")}</a><a class="project-item" href="#/playground?project=layout"><span class="project-thumbnail layout-art" aria-hidden="true"><i></i><i></i><i></i><i></i></span><div><span class="small-label">CSS Grid · Menengah</span><h3>Layout yang ikut beradaptasi</h3><p>Satu desain, berbagai ukuran layar.</p></div>${icon("arrow")}</a></div></section>
    <div class="reference-projects"><span>Intip proyek lengkap:</span><a href="CSS%20Grid%20Flexbox%20Project/beranda.html" target="_blank" rel="noopener">Website Grid & Flexbox ${icon("external")}<span class="sr-only"> (tab baru)</span></a><a href="Tailwind-Materials/Tailwind%20Best%20Practice%20Project/index.html" target="_blank" rel="noopener">Tailwind Best Practice ${icon("external")}<span class="sr-only"> (tab baru)</span></a></div>
    <footer class="page-footer"><span>Dirangkai untuk rasa ingin tahumu.</span>${platformLink()}</footer>
  </div>`;
}

export function lessonRow(lesson, state) {
  const done = state.completed.includes(lesson.id);
  return `<div class="lesson-result"><a href="${lessonLink(lesson)}"><span class="lesson-index ${done ? "is-done" : ""}">${done ? icon("check") : String(lesson.number + 1).padStart(2, "0")}</span><div class="result-content"><h3>${e(lesson.title)}</h3><p>${e(lesson.description)}</p></div><span class="lesson-duration">${icon("clock")} ${lesson.minutes} mnt</span><span class="tag ${lesson.course}">${lesson.course === "tailwind" ? "Tailwind" : lesson.course === "bootstrap" ? "Bootstrap" : lesson.course === "backend" ? "PHP & Database" : lesson.course.toUpperCase()}</span>${icon("chevron")}</a><button class="icon-button bookmark-button ${state.saved.includes(lesson.id) ? "saved" : ""}" data-bookmark="${lesson.id}" aria-label="${state.saved.includes(lesson.id) ? "Hapus simpanan" : "Simpan"} ${e(lesson.title)}" aria-pressed="${state.saved.includes(lesson.id)}">${icon("bookmark")}</button></div>`;
}

export function catalogView(catalog, state, query = "", selected = "all") {
  return `<div class="page-content catalog-view"><div class="page-intro"><span class="intro-icon">${icon("grid")}</span><h1>Temukan hal baru hari ini.</h1><p>${catalog.lessons.length} materi, ${catalog.courses.length} jalur, dan banyak kemungkinan. Mulai dari rasa ingin tahumu.</p></div><div class="catalog-tools"><label class="search-field">${icon("search")}<input type="search" id="catalog-search" aria-label="Cari materi" placeholder="Cari konsep, misalnya: flexbox, forms, animation…" value="${e(query)}"><kbd>/</kbd></label><div class="filter-row" role="group" aria-label="Filter jalur belajar"><button class="filter-chip ${selected === "all" ? "active" : ""}" data-filter="all" aria-pressed="${selected === "all"}">Semua materi <span>${catalog.lessons.length}</span></button>${catalog.courses.map((course) => `<button class="filter-chip ${selected === course.id ? "active" : ""}" data-filter="${course.id}" aria-pressed="${selected === course.id}">${course.name}<span>${catalog.lessons.filter((lesson) => lesson.course === course.id).length}</span></button>`).join("")}</div></div><div class="results-heading"><h2>Materi pembelajaran</h2><span id="result-count" aria-live="polite"></span></div><div id="catalog-results"></div></div>`;
}

export function courseView(course, catalog, state) {
  const lessons = catalog.lessons.filter(
    (lesson) => lesson.course === course.id,
  );
  const count = lessons.filter((lesson) =>
    state.completed.includes(lesson.id),
  ).length;
  const next =
    lessons.find((lesson) => !state.completed.includes(lesson.id)) ||
    lessons[0];
  return `<div class="page-content course-view"><a href="#/catalog" class="back-link">${icon("back")} Semua jalur belajar</a><section class="course-banner ${course.id}"><div><span class="badge">${course.label} · ${course.level}</span><h1>${course.name}</h1><p>${course.detail}</p><div class="banner-meta"><span>${icon("book")} ${lessons.length} materi</span><span>${icon("clock")} ${minutesLabel(lessons.reduce((sum, lesson) => sum + lesson.minutes, 0))} baca</span></div><a class="button primary" href="${lessonLink(next)}">${count ? "Lanjutkan belajar" : "Mulai jalur ini"} ${icon("arrow")}</a></div><span class="banner-symbol" aria-hidden="true">${e(course.symbol)}</span></section><div class="course-progress"><div><strong>Perjalananmu</strong><span>${count} dari ${lessons.length} materi selesai</span></div><progress value="${count}" max="${lessons.length}" aria-label="Progres ${course.name}"></progress></div><div class="section-heading"><div><h2>Selangkah demi selangkah.</h2><p>Ikuti urutannya atau langsung buka konsep yang ingin kamu pelajari.</p></div></div><div class="lesson-list">${lessons.map((lesson) => lessonRow(lesson, state)).join("")}</div></div>`;
}

export function savedView(catalog, state) {
  const lessons = catalog.lessons.filter((lesson) =>
    state.saved.includes(lesson.id),
  );
  return `<div class="page-content"><div class="page-intro"><span class="intro-icon">${icon("bookmark")}</span><h1>Simpan rasa ingin tahumu.</h1><p>Materi pilihanmu, siap dibuka lagi kapan pun kamu ingin belajar.</p></div>${lessons.length ? `<div class="results-heading"><h2>Koleksi materimu</h2><span>${lessons.length} tersimpan</span></div><div class="lesson-list">${lessons.map((lesson) => lessonRow(lesson, state)).join("")}</div>` : emptyState("Belum ada materi tersimpan", "Tekan ikon bookmark pada materi yang menarik. Koleksimu akan muncul di sini.", undefined, "bookmark")}</div>`;
}

export function roadmapView(catalog, state) {
  return `<div class="page-content roadmap-view"><div class="page-intro"><span class="intro-icon">${icon("route")}</span><h1>Tujuan besar. Langkah yang jelas.</h1><p>Jalur yang disarankan untuk membangun website pertamamu. Belajar sesuai ritmemu; semua materi terbuka.</p></div><div class="roadmap">${catalog.courses
    .map((course, index) => {
      const items = catalog.lessons.filter(
        (lesson) => lesson.course === course.id,
      );
      const count = items.filter((lesson) =>
        state.completed.includes(lesson.id),
      ).length;
      return `<section class="roadmap-step"><span class="step-number">${String(index + 1).padStart(2, "0")}</span><div><span class="small-label">${index < 2 ? "Fondasi utama" : course.id === "backend" ? "Materi lanjutan" : "Pilihan framework"} · ${course.level}</span><h2>${course.name}</h2><p>${course.detail}</p><div class="roadmap-meta"><span>${items.length} materi · ${count} selesai</span><a href="#/courses/${course.id}" class="text-link">Buka jalur ${icon("arrow")}</a></div></div><span class="roadmap-symbol ${course.id}" aria-hidden="true">${e(course.symbol)}</span></section>`;
    })
    .join(
      "",
    )}<section class="roadmap-finish">${icon("trophy")}<div><h2>Waktunya membuat sesuatu milikmu.</h2><p>Gabungkan yang sudah dipelajari menjadi proyek pertama.</p></div><a class="button primary" href="#/playground?project=profile">Mulai berkarya ${icon("arrow")}</a></section></div></div>`;
}

export function progressView(catalog, state) {
  const done = catalog.lessons.filter((lesson) =>
    state.completed.includes(lesson.id),
  );
  const percent = Math.round((done.length / catalog.lessons.length) * 100);
  return `<div class="page-content"><div class="page-intro"><span class="intro-icon">${icon("chart")}</span><h1>Setiap langkahmu berarti.</h1><p>Ini perjalanan belajarmu sejauh ini. Tidak perlu terburu-buru.</p></div><section class="progress-overview"><div class="progress-ring" style="--progress:${percent}%"><strong>${percent}<small>%</small></strong></div><div><h2>${done.length ? "Teruskan rasa ingin tahumu." : "Perjalananmu dimulai di sini."}</h2><p>${done.length} dari ${catalog.lessons.length} materi selesai · ${state.activeDays.length} hari belajar</p><span class="small-label">Progres tersimpan di browser ini, tanpa akun.</span></div></section><div class="course-grid">${catalog.courses.map((course) => courseCard(course, catalog.lessons, state)).join("")}</div><div class="section-heading"><h2>Yang sudah kamu pelajari</h2></div>${done.length ? `<div class="lesson-list">${done.map((lesson) => lessonRow(lesson, state)).join("")}</div>` : emptyState("Langkah pertama menunggumu", "Buka satu materi, pahami konsepnya, lalu tekan “Tandai selesai”.", `<a class="button primary" href="#/lesson/html-000">Mulai belajar HTML ${icon("arrow")}</a>`, "leaf")}</div>`;
}
