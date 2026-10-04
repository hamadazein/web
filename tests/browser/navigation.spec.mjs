import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("desktop navigation stays out of the reading area and closes accessibly", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#/lesson/backend-000");
  await expect(page.locator(".lesson-article h2")).toHaveCount(10);
  await expect(page.locator(".sidebar")).toHaveCount(0);
  const toggle = page.getByRole("button", {
    name: "Buka navigasi",
    exact: true,
  });
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  const menu = page.getByRole("dialog", { name: "Menu navigasi" });
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("body")).toHaveClass(/navigation-open/);
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(audit.violations.map((item) => item.id)).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("body")).not.toHaveClass(/navigation-open/);
  await toggle.click();
  await page.mouse.click(1000, 300);
  await expect(menu).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await menu.getByRole("button", { name: "Tutup navigasi" }).click();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await menu.getByRole("link", { name: "Beranda", exact: true }).click();
  await expect(page).toHaveURL(/#\/home$/);
  await expect(
    page.getByRole("dialog", { name: "Menu navigasi" }),
  ).not.toBeVisible();
});

test("lesson list is collapsed, keyboard accessible, and available on phones", async ({
  page,
}) => {
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#/lesson/html-001");
    await expect(page.locator(".lesson-completion")).toBeVisible();
    const list = page.locator(".lesson-outline");
    const summary = list.locator("summary");
    await expect(summary).toBeVisible();
    await expect(list).not.toHaveAttribute("open", "");
    await expect(list.locator("nav")).not.toBeVisible();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(list.locator("nav")).toBeVisible();
    await list.getByRole("link", { name: /Basic/ }).click();
    await expect(page).toHaveURL(/lesson\/html-002/);
    await expect(page.locator(".lesson-outline nav")).not.toBeVisible();
    await page
      .getByRole("button", { name: "Tandai selesai", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Buka navigasi", exact: true })
      .click();
    await expect(page.locator("#mobile-nav .sidebar-progress")).toContainText(
      "1 / 118",
    );
    await page.keyboard.press("Escape");
    await page
      .getByRole("button", { name: "Materi selesai", exact: true })
      .click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
