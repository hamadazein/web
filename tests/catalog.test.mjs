import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

test("all four learning paths contain real, unique, readable local lessons", async () => {
  const catalog = JSON.parse(
    await readFile("assets/data/catalog.json", "utf8"),
  );
  assert.deepEqual(
    catalog.courses.map((course) => course.id),
    ["html", "css", "tailwind", "bootstrap"],
  );
  assert.ok(catalog.lessons.length >= 115);
  assert.equal(
    new Set(catalog.lessons.map((lesson) => lesson.id)).size,
    catalog.lessons.length,
  );
  await Promise.all(
    catalog.lessons.map(async (lesson) => {
      assert.ok(lesson.title.length > 0);
      assert.ok(lesson.minutes >= 2);
      await access(lesson.path);
      assert.ok((await readFile(lesson.path, "utf8")).trim().length > 0);
    }),
  );
});

test("HTML CSS lesson is categorized in HTML and Tailwind duplicate is excluded", async () => {
  const { lessons } = JSON.parse(
    await readFile("assets/data/catalog.json", "utf8"),
  );
  assert.equal(
    lessons.find((lesson) => lesson.id === "html-013").path,
    "CSS-Materials/013 HTML CSS/README.md",
  );
  assert.equal(
    lessons.filter((lesson) => lesson.id === "tailwind-007").length,
    1,
  );
  assert.equal(
    lessons.find((lesson) => lesson.id === "css-020").path,
    "CSS-Materials/020 CSS Google Fonts/README.MD",
  );
});
