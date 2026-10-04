# Weblab design

## Direction

Pelajar membuka laptop di ruang kelas yang terang dan ingin segera mencoba konsep baru. Permukaan terang menjaga materi terbaca; editor gelap memisahkan kode dari hasilnya. Beranda memadukan ruang belajar yang tenang dengan satu demonstrasi interaktif yang berkesan.

## Palette

- Canvas: #f7f9f8
- Surface: #ffffff
- Ink: #172b26
- Muted text: #586760
- Brand: #087c5c
- Mint: #d9f4e8
- HTML: #fff0e7 / #a94d20
- CSS: #e8edff / #3d55b0
- Tailwind: #e3f4fa / #136783
- Bootstrap: #f0e8ff / #7442a6
- Form, PHP & Database: #e1f3ef / #166653

## Typography

Body: "OpenAI Sans", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif. Inter variable Latin is self-hosted with font-display: swap. OpenAI Sans uses local() only when installed; no unprovided proprietary font asset is assumed. Code: ui-monospace, SFMono-Regular, Consolas, monospace. Display uses the same sans, weight 600–700, tracking -0.04em or looser. Reader text is 17px / 1.8 and limited to 72ch.

## Layout

Desktop and mobile share a sticky header with an explicit Menu button. Global navigation stays hidden until opened in a native modal drawer, closes after selection or dismissal, and returns keyboard focus to the button. Homepage: greeting, interactive split hero, five real learning paths (four frontend paths followed by introductory backend/database theory), next-lesson entry and practical challenges. Mobile: compact header, stacked hero and learning paths. Reader: centered single-column article, a collapsed native lesson-list disclosure, and next/previous navigation.

## Signature

The hero shows editable HTML/CSS producing a real preview. Its accent swatches alter the displayed result and invite opening the full playground.

BelajarKode is presented as the next learning destination through a compact lowercase wordmark, using its live brand colors (#142d22 and #b8f3a8). Links appear in the homepage footer and navigation drawer. A restrained continuation section follows the second backend lesson; it is hidden during focus mode and printing. Promotional copy stays brief and factual, with no pop-ups or interruption of reading.

The homepage follows the five available paths with three upcoming cards: CRUD, authentication, and deployment. These complete the two-row desktop grid while explicitly showing Segera hadir. Upcoming cards have no links, lesson counts, or progress and do not appear in the available catalog filters or roadmap. Card metadata aligns at the bottom of each row.

## Components and motion

12–16px card radius, pill badges, 44px touch controls, solid border or restrained shadow. 180ms hover/focus feedback. Reduced-motion turns transitions off. Progress and bookmarks always reflect real browser-local data.
