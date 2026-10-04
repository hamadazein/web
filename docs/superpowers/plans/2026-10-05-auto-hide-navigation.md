# Auto-hide Navigation Implementation Plan

**Goal:** Reduce persistent navigation clutter while keeping every destination accessible by mouse, touch, and keyboard.

**Architecture:** Reuse the native navigation dialog on all screen sizes. Remove the permanent desktop sidebar, keep a sticky header with an explicit Menu button, and convert the reader lesson list into a collapsed native disclosure. Keep the existing brand, navigation groups, and focus mode.

**Tech Stack:** Existing JavaScript modules, CSS, native dialog/details, Playwright and axe.

- [x] Add browser checks for hidden-by-default navigation, dismissal, focus return, navigation selection, and the lesson list; confirm failure.
- [x] Make the global navigation a drawer for desktop and mobile with accurate ARIA state and refreshed progress.
- [x] Collapse lesson navigation, center reading content, and preserve narrow-screen layout and reduced motion.
- [x] Verify unit tests, full browser suite, axe with open navigation, formatting, and desktop/mobile screenshots.
