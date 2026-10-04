import { test, expect } from "@playwright/test";

test("three upcoming cards follow database and do not pretend to offer lessons", async ({
  page,
}) => {
  await page.goto("/#/home");
  const cards = page.locator(".learning-paths .course-card");
  await expect(cards).toHaveCount(8);
  await expect(cards.nth(4)).toContainText("Form, PHP & Database");
  const upcoming = page.locator(".course-card.is-upcoming");
  await expect(upcoming).toHaveCount(3);
  await expect(upcoming.locator("h3")).toHaveText([
    "CRUD & Pengelolaan Data",
    "Login & Hak Akses",
    "Proyek Web & Deployment",
  ]);
  for (const card of await upcoming.all()) {
    await expect(card).toContainText("Segera hadir");
    await expect(card.locator("a, button")).toHaveCount(0);
    await expect(card).not.toContainText("0 materi");
  }
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/#/catalog");
  await expect(page.locator("[data-filter]")).toHaveCount(6);
});
