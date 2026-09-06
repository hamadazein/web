import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";

await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1050 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const reports = [];
for (const [name, route] of [
  ["home", "/"],
  ["catalog", "/#/catalog"],
  ["reader", "/#/lesson/html-001"],
]) {
  await page.goto("http://127.0.0.1:4173" + route);
  await page.locator("#main h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
  if (name === "reader")
    await page.locator(".lesson-completion:not([hidden])").waitFor();
  await page.screenshot({
    path: `artifacts/${name}-desktop.png`,
    fullPage: true,
  });
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  reports.push({
    page: name,
    violations: results.violations.map((item) => ({
      id: item.id,
      nodes: item.nodes.map((node) => ({
        target: node.target,
        summary: node.failureSummary,
      })),
    })),
  });
}
await page.evaluate(() => localStorage.clear());
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:4173/");
await page.locator(".hero").waitFor();
await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
await page.goto("http://127.0.0.1:4173/#/lesson/html-001");
await page.locator(".lesson-completion:not([hidden])").waitFor();
await page.screenshot({ path: "artifacts/reader-mobile.png", fullPage: true });
await page.setViewportSize({ width: 1440, height: 1050 });
await page.goto("http://127.0.0.1:4173/#/playground");
await page.locator("#playground-preview").waitFor();
await page.screenshot({
  path: "artifacts/playground-desktop.png",
  fullPage: true,
});
await page.goto("http://127.0.0.1:4173/#/catalog?q=flexbox");
console.log(
  "Flexbox results:",
  await page.locator(".lesson-result h3").allTextContents(),
);
await writeFile("artifacts/a11y.json", JSON.stringify(reports, null, 2));
console.log(
  JSON.stringify(
    {
      reports: reports.map((report) => ({
        page: report.page,
        violations: report.violations.map((item) => ({
          id: item.id,
          count: item.nodes.length,
        })),
      })),
      errors,
    },
    null,
    2,
  ),
);
await browser.close();
