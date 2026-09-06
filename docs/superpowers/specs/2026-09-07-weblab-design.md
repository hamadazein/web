# Weblab learning experience

The user authorized cloning and improving the full learning UI. Implementation proceeds in this session using the repository's static hosting model.

## Chosen approach

A lightweight static learning application, with hash routes and no login. Alternatives considered: a refreshed link directory would leave learning fragmented; a framework migration would add hosting/build complexity without helping this content-first task.

## Scope

- New responsive home and shared navigation.
- Searchable catalog generated from existing README files, preserving filename case.
- Four learning paths, a roadmap, saved lessons, and browser-local completion tracking.
- In-app sanitized Markdown reader with working relative images and demo links.
- HTML/CSS playground with isolated preview, preset challenges, reset, download, and saved draft.
- Locally hosted Inter and the requested OpenAI Sans fallback stack.
- Legacy course landing URLs lead into matching paths; existing educational demo files stay available.
- Accessible keyboard interaction, focus, large-text preference, reduced motion, and empty/error states.

## Architecture

Native JavaScript modules in assets/js. Generator discovers actual lesson files and outputs a small catalog. Marked and DOMPurify are copied into assets/vendor for local Markdown rendering. Native static server supports development; any static host can serve the result, including a GitHub Pages project subpath.

## Validation

Node tests validate catalog coverage and browser-local learning state edge cases. Playwright tests verify learning, saved lessons, search, preview isolation, reload persistence, legacy URLs, mobile navigation, and reader asset links. Axe checks cover home, reader, catalog, and mobile. Production output is inspected by screenshots and local HTTP checks.
