import test from "node:test";
import assert from "node:assert/strict";
import { createStore, getContinueLesson } from "../assets/js/state.mjs";

function memory(value = null) {
  return {
    value,
    getItem() {
      return this.value;
    },
    setItem(key, next) {
      this.value = next;
    },
  };
}

test("completion is unique, reversible, and survives reload", () => {
  const storage = memory();
  const store = createStore(storage);
  store.complete("html-000", true);
  store.complete("html-000", true);
  assert.deepEqual(createStore(storage).get().completed, ["html-000"]);
  store.complete("html-000", false);
  assert.deepEqual(createStore(storage).get().completed, []);
});

test("bookmarks toggle independently from completion", () => {
  const store = createStore(memory());
  store.bookmark("css-057");
  assert.deepEqual(store.get().saved, ["css-057"]);
  assert.deepEqual(store.get().completed, []);
  store.bookmark("css-057");
  assert.deepEqual(store.get().saved, []);
});

test("malformed and incorrectly typed stored data recover to defaults", () => {
  for (const value of [
    "bad JSON",
    "null",
    "[]",
    '{"completed":4,"saved":[null,1],"last":{}}',
  ]) {
    const store = createStore(memory(value));
    assert.deepEqual(store.get().completed, []);
    assert.deepEqual(store.get().saved, []);
    assert.equal(store.get().last, null);
  }
});

test("blocked browser storage still allows learning within the session", () => {
  const store = createStore({
    getItem() {
      throw Error("blocked");
    },
    setItem() {
      throw Error("blocked");
    },
  });
  store.complete("html-000", true);
  store.visit("html-001");
  assert.deepEqual(store.get().completed, ["html-000"]);
  assert.equal(store.get().last, "html-001");
  assert.equal(store.persistent, false);
});

test("preferences survive reload with allowed values only", () => {
  const storage = memory();
  const store = createStore(storage);
  store.preference("largeText", true);
  store.preference("reduceMotion", true);
  assert.equal(createStore(storage).get().preferences.largeText, true);
  assert.equal(createStore(storage).get().preferences.reduceMotion, true);
});

test("continue learning advances after a completed lesson and keeps unfinished reading", () => {
  const lessons = [
    { id: "html-000", course: "html" },
    { id: "html-001", course: "html" },
    { id: "css-000", course: "css" },
  ];
  assert.equal(
    getContinueLesson(lessons, { last: "html-000", completed: [] }).id,
    "html-000",
  );
  assert.equal(
    getContinueLesson(lessons, { last: "html-000", completed: ["html-000"] })
      .id,
    "html-001",
  );
  assert.equal(
    getContinueLesson(lessons, {
      last: "html-001",
      completed: ["html-000", "html-001"],
    }).id,
    "css-000",
  );
});
