import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("assets and lessons work under a GitHub Pages project subpath", async ({
  page,
}) => {
  await page.route("**/web/**", async (route) => {
    const response = await route.fetch({
      url: route.request().url().replace("/web/", "/"),
    });
    await route.fulfill({ response });
  });
  await page.goto("/web/index.html#/lesson/html-002");
  await expect(page.locator(".lesson-completion")).toBeVisible();
  const image = page.locator(".lesson-article img").first();
  await expect(image).toBeVisible();
  expect(
    await image.evaluate(
      (element) => element.complete && element.naturalWidth > 0,
    ),
  ).toBe(true);
  await page.getByRole("link", { name: "Weblab beranda", exact: true }).click();
  await expect(page).toHaveURL(/\/web\/index.html#\/home/);
  await expect(page.locator(".hero")).toBeVisible();
});

test("all primary pages fit 320px, tablet, and desktop without horizontal scroll", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/#/catalog",
      "/#/courses/css",
      "/#/lesson/html-001",
      "/#/roadmap",
      "/#/progress",
      "/#/saved",
      "/#/playground",
    ]) {
      await page.goto(route);
      await expect(page.locator("#main h1")).toBeVisible();
      if (route.includes("/lesson"))
        await expect(page.locator(".lesson-completion")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${width}px ${route}`,
      ).toBe(true);
    }
  }
});

test("reader resolves relative images and standalone demo links", async ({
  page,
  request,
}) => {
  await page.goto("/#/lesson/html-002");
  const image = page.locator(".lesson-article img").first();
  await expect(image).toBeVisible();
  expect((await request.get(await image.getAttribute("src"))).ok()).toBe(true);
  await page.goto("/#/lesson/html-001");
  await expect(page.locator(".lesson-completion")).toBeVisible();
  const demo = page
    .locator(".lesson-article a")
    .filter({ hasText: "HTMLIntroduction.html" });
  expect((await request.get(await demo.getAttribute("href"))).ok()).toBe(true);
});

test("preferences work on mobile and persist after reload", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Pengaturan kenyamanan" }).click();
  await page.getByLabel("Teks lebih besar").check();
  await page.getByLabel("Kurangi animasi").check();
  await page.getByRole("button", { name: "Selesai", exact: true }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/large-text/);
  await expect(page.locator("html")).toHaveClass(/reduce-motion/);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    result.violations.map((item) => ({
      id: item.id,
      targets: item.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
});

test("keyboard search and skip navigation retain the current route", async ({
  page,
}) => {
  await page.goto("/#/courses/css");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Lewati navigasi" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  await expect(page).toHaveURL(/#\/courses\/css/);
  await page.keyboard.press("Control+k");
  await expect(
    page.getByRole("searchbox", { name: "Cari materi" }),
  ).toBeFocused();
});

test("lesson loading failure can be retried without losing the route", async ({
  page,
}) => {
  let fail = true;
  await page.route("**/000%20Definisi%20HTML/README.md", (route) =>
    fail ? route.abort() : route.continue(),
  );
  await page.goto("/#/lesson/html-000");
  await expect(page.getByText("Materi belum bisa dimuat.")).toBeVisible();
  fail = false;
  await page.getByRole("button", { name: "Coba lagi", exact: true }).click();
  await expect(page.locator(".lesson-article")).toContainText(
    "Hypertext Markup Language",
  );
});

test("sanitizes active markup in lessons", async ({ page }) => {
  await page.route("**/000%20Definisi%20HTML/README.md", (route) =>
    route.fulfill({
      contentType: "text/plain",
      body: '# Definisi HTML\n\nMateri aman.\n\n<script>window.compromised = true</script>\n<img src="x" onerror="window.compromised = true">\n<a href="javascript:alert(1)">Link</a>',
    }),
  );
  await page.goto("/#/lesson/html-000");
  await expect(page.locator(".lesson-completion")).toBeVisible();
  expect(await page.evaluate(() => window.compromised)).toBeUndefined();
  await expect(
    page.locator(
      '.lesson-article script, .lesson-article [onerror], .lesson-article [href^="javascript:"]',
    ),
  ).toHaveCount(0);
});

test("unavailable storage does not prevent completion or bookmarking", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Storage blocked", "SecurityError");
      },
    }),
  );
  await page.goto("/#/lesson/html-000");
  await page
    .getByRole("button", { name: "Tandai selesai", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Simpan materi", exact: true })
    .click();
  await page.goto("/#/saved");
  await expect(
    page.getByRole("heading", { name: "Definisi HTML", exact: true }),
  ).toBeVisible();
});
