import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

test("all five learning paths contain real, unique, readable local lessons", async () => {
  const catalog = JSON.parse(
    await readFile("assets/data/catalog.json", "utf8"),
  );
  assert.deepEqual(
    catalog.courses.map((course) => course.id),
    ["html", "css", "tailwind", "bootstrap", "backend"],
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

test("database theory follows frontend courses as a separate learning path", async () => {
  const { courses, lessons } = JSON.parse(
    await readFile("assets/data/catalog.json", "utf8"),
  );
  assert.equal(courses.at(-1).id, "backend");
  assert.equal(lessons.at(-1).id, "backend-000");
  assert.equal(lessons.at(-1).title, "Teori Koneksi Database");
  assert.equal(
    lessons.some((lesson) => lesson.id === "html-052"),
    false,
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
