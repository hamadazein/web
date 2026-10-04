import { icon } from "./ui.mjs";

const destination = "https://belajarkode.web.id/";
const wordmark =
  '<span class="belajarkode-mark" aria-hidden="true">&lt;/&gt;</span><span class="belajarkode-name">belajarkode</span>';

export function platformLink() {
  return `<a class="platform-link" href="${destination}" target="_blank" rel="noopener noreferrer" aria-label="Belajar lebih lanjut di BelajarKode (tab baru)"><span class="platform-link-caption">Belajar lebih lanjut di</span><span class="belajarkode-wordmark">${wordmark}${icon("external")}</span></a>`;
}

export function lessonContinuation() {
  return `<section class="platform-continuation" aria-labelledby="continuation-title"><div class="continuation-copy"><h2 id="continuation-title">Siap melangkah lebih jauh?</h2><p>Lanjutkan belajar dengan materi terstruktur dan praktik di BelajarKode.</p></div><a class="continuation-link" href="${destination}" target="_blank" rel="noopener noreferrer" aria-label="Lanjut belajar di BelajarKode (tab baru)"><span class="belajarkode-wordmark">${wordmark}</span><span class="continuation-action">Lanjut belajar ${icon("arrow")}</span></a></section>`;
}
