# Weblab verification — 2026-09-07

Implementation branch: `feat/weblab-learning-experience`.

- `npm run build`: 117 lessons across four paths; locally hosted fonts and Markdown libraries generated successfully.
- `npm test`: 8 passing tests for curriculum metadata, persisted state, invalid data recovery, storage fallback, and continuing to the next lesson.
- `npm run test:e2e`: 17 passing Chromium tests, including 40 route/viewport combinations at 320, 390, 768, 1024, and 1440 pixels.
- Axe: no detected WCAG A/AA violations on home, catalog, reader, playground host, and mobile home with large text enabled.
- Browser journeys cover bookmarks/completion across reload, live preview and draft persistence, search/empty state, keyboard shortcuts, mobile navigation, local images/demo links, Markdown sanitization, failed fetch retry, legacy course URL redirects, blocked localStorage, and a simulated GitHub Pages `/web/` subpath.
- Local source reference scan: 82 Markdown links/images checked; the malformed `caniuse.com` reference was corrected to an absolute URL.
- Desktop and mobile screenshots inspected; output is in ignored `artifacts/`. No JavaScript page errors were captured during screenshot inspection.
- `npm run format:check` and `git diff --check` pass.

## Limits

The app stores progress and drafts on the current browser, without account synchronization. OpenAI Sans is used only when locally available; bundled Inter is the fallback. Original tutorial content has not been comprehensively updated for newer framework versions. Learner-authored sandbox contents are excluded from the automated host accessibility audit. Deployment has not been performed; the static app is ready to host.
