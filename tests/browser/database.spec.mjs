import { test, expect } from "@playwright/test";

test("database theory is discoverable after frontend paths and progress persists", async ({
  page,
}) => {
  await page.goto("/#/home");
  const cards = page.locator(".learning-paths .course-card");
  await expect(cards).toHaveCount(8);
  await expect(cards.nth(4)).toContainText("Form, PHP & Database");
  await cards.nth(4).click();
  await page.getByRole("link", { name: /Mulai jalur ini/ }).click();
  await expect(page).toHaveURL(/lesson\/backend-000/);
  await expect(page.locator(".lesson-article h2")).toHaveCount(10);
  await expect(page.locator(".lesson-article")).toContainText(
    "Buku induk mahasiswa",
  );
  const diagram = page.locator(".lesson-article img");
  await diagram.scrollIntoViewIfNeeded();
  await diagram.evaluate((img) => img.decode());
  expect(await diagram.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
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
  await expect(
    page.getByRole("button", { name: "Hapus simpanan", exact: true }),
  ).toBeVisible();
  await page.goto("/#/roadmap");
  await expect(page.locator(".roadmap-step")).toHaveCount(5);
  await expect(page.locator(".roadmap-step").last()).toContainText(
    "Materi lanjutan",
  );
  await expect(page.locator(".roadmap-step").last()).toContainText(
    "Form, PHP & Database",
  );
  await page.goto("/#/catalog");
  await page.getByRole("button", { name: /Form, PHP & Database/ }).click();
  await expect(page.locator(".lesson-result")).toHaveCount(2);
  await expect(page.locator(".lesson-result").first()).toContainText(
    "Teori Koneksi Database",
  );
});

test("second database lesson follows theory and renders its practical steps", async ({
  page,
}) => {
  await page.goto("/#/lesson/backend-000");
  await page
    .locator(".lesson-pagination")
    .getByRole("link", { name: /Praktik Koneksi Database dengan PHP/ })
    .click();
  await expect(page).toHaveURL(/lesson\/backend-001/);
  await expect(page.locator(".lesson-article h2")).toHaveCount(10);
  await expect(page.locator(".lesson-article")).toContainText(
    "PDO::ATTR_EMULATE_PREPARES",
  );
  const diagram = page.locator(".lesson-article img");
  await diagram.scrollIntoViewIfNeeded();
  await diagram.evaluate((img) => img.decode());
  expect(await diagram.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  await page
    .locator(".lesson-pagination")
    .getByRole("link", { name: /Teori Koneksi Database/ })
    .click();
  await expect(page).toHaveURL(/lesson\/backend-000/);
});

test("database course and lesson fit narrow screens", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  for (const route of [
    "home",
    "catalog",
    "roadmap",
    "courses/backend",
    "lesson/backend-000",
    "lesson/backend-001",
  ]) {
    await page.goto(`/#/${route}`);
    await expect(page.locator("#main h1")).toBeVisible();
    if (route.startsWith("lesson/")) {
      await expect(page.locator(".lesson-article h2")).toHaveCount(10);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
