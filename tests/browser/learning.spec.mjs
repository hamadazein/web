import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("learner reads, bookmarks, completes, and resumes after reload", async ({
  page,
}) => {
  await page.goto("/#/lesson/html-000");
  await expect(page.locator(".lesson-article")).toContainText(
    "Hypertext Markup Language",
  );
  await page
    .getByRole("button", { name: "Simpan materi", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Tandai selesai", exact: true })
    .click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Materi selesai", exact: true }),
  ).toBeVisible();
  await page.goto("/#/saved");
  await expect(
    page.getByRole("link", { name: /Definisi HTML/ }).first(),
  ).toBeVisible();
});

test("catalog filters and searches real lessons, with an actionable empty state", async ({
  page,
}) => {
  await page.goto("/#/catalog");
  await page.getByRole("searchbox", { name: "Cari materi" }).fill("flexbox");
  await expect(
    page.locator(".lesson-result").filter({
      has: page.getByRole("heading", { name: "CSS Flexbox", exact: true }),
    }),
  ).toBeVisible();
  await expect(
    page.locator(".lesson-result").filter({ hasNotText: /flexbox/i }),
  ).toHaveCount(0);
  await page
    .getByRole("searchbox", { name: "Cari materi" })
    .fill("tidak-ada-materi-xyz");
  await expect(page.getByText("Materi belum ditemukan")).toBeVisible();
  await page.getByRole("button", { name: "Hapus pencarian" }).click();
  await expect(page.locator(".lesson-result").first()).toBeVisible();
});

test("playground updates isolated preview and persists a draft", async ({
  page,
}) => {
  await page.goto("/#/playground");
  await page
    .getByRole("textbox", { name: "Kode HTML" })
    .fill("<h1>Halo pembelajar!</h1>");
  await page.getByRole("button", { name: "Jalankan kode" }).click();
  await expect(
    page
      .frameLocator("#playground-preview")
      .getByRole("heading", { name: "Halo pembelajar!" }),
  ).toBeVisible();
  await page.reload();
  await expect(page.getByRole("textbox", { name: "Kode HTML" })).toHaveValue(
    "<h1>Halo pembelajar!</h1>",
  );
  await expect(page.locator("#playground-preview")).toHaveAttribute(
    "sandbox",
    "",
  );
});

test("mobile navigation works and page has no horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka navigasi" }).click();
  await page
    .getByRole("link", { name: "Jelajahi materi", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("heading", { name: "Temukan hal baru hari ini." }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

for (const route of [
  "/",
  "/#/catalog",
  "/#/lesson/html-001",
  "/#/playground",
]) {
  test(`accessible primary surface ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("#main h1")).toBeVisible();
    if (route.includes("lesson"))
      await expect(page.locator(".lesson-article")).toContainText("HTML");
    // Learner-authored sandbox documents cannot receive axe's injected scripts.
    // Check the entire host interface, including the iframe's accessible title.
    let results;
    if (route.includes("playground")) {
      await page.addScriptTag({ path: "node_modules/axe-core/axe.min.js" });
      results = await page.evaluate(() =>
        window.axe.run(document, {
          iframes: false,
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
        }),
      );
    } else
      results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
    expect(
      results.violations.map((item) => ({
        id: item.id,
        targets: item.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });
}

test("legacy course URLs lead to corresponding new path", async ({ page }) => {
  await page.goto("/CSS-Materials/index.html");
  await expect(page).toHaveURL(/#\/courses\/css/);
  await expect(
    page.getByRole("heading", { name: "CSS", exact: true }),
  ).toBeVisible();
});
