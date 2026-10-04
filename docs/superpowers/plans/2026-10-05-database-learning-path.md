# Database Learning Path Implementation Plan

**Goal:** Place introductory database theory after the four frontend paths, with a separate name and beginner-friendly explanations.

**Architecture:** Add a fifth catalog course using the existing folder-based generator and course UI. Move the ten-slide lesson out of HTML, simplify its prose, and keep its local diagram.

**Tech Stack:** Markdown, Node.js catalog generation, existing JavaScript views and CSS, Playwright.

- [x] Test fifth-path ordering and database lesson persistence, then confirm failure.
- [x] Move the lesson to `Backend-Materials/000 Teori Koneksi Database`, simplify explanations, and add course metadata.
- [x] Include the fifth course in roadmap, badges, colors, and persisted state validation.
- [x] Rebuild catalog, update documentation, run unit and browser checks for discovery, reading, and persistence.
