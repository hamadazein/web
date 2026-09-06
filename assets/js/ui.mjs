export const escapeHTML = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );

const paths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  route:
    '<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v7a4 4 0 0 0 4 4h2M18 17V9a4 4 0 0 0-4-4h-2"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4Z"/>',
  chart: '<path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  back: '<path d="M20 12H4m6 6-6-6 6-6"/>',
  external: '<path d="M14 3h7v7m0-7L10 14m0-10H4v16h16v-6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  book: '<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',
  play: '<path d="m8 4 12 8-12 8Z"/>',
  spark:
    '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  settings:
    '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor"/><circle cx="16" cy="17" r="3" fill="currentColor"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  reset: '<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V3H3v13h5"/>',
  trophy:
    '<path d="M8 3h8v7a4 4 0 0 1-8 0Zm0 2H3v3a4 4 0 0 0 5 4m8-7h5v3a4 4 0 0 1-5 4m-4 2v6m-4 0h8"/>',
  leaf: '<path d="M19 3C8 3 3 7 3 13a7 7 0 0 0 14 0c0-4 0-7 2-10ZM4 20l8-10"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
};
export function icon(name, className = "") {
  return `<svg class="icon ${className}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.code}</svg>`;
}
export function lessonLink(lesson) {
  return `#/lesson/${lesson.id}`;
}
export function minutesLabel(minutes) {
  return minutes >= 60
    ? `${Math.floor(minutes / 60)} jam ${minutes % 60 || ""}${minutes % 60 ? " mnt" : ""}`
    : `${minutes} menit`;
}
let toastTimeout;
export function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => element.classList.remove("visible"), 3600);
}
export function emptyState(
  title,
  message,
  action = '<a class="button primary" href="#/catalog">Jelajahi materi</a>',
  symbol = "book",
) {
  return `<div class="empty-state"><span class="empty-icon">${icon(symbol)}</span><h2>${title}</h2><p>${message}</p>${action}</div>`;
}
