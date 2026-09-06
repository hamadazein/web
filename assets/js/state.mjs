const KEY = "weblab.learning.v1";
const defaults = () => ({
  completed: [],
  saved: [],
  last: null,
  activeDays: [],
  preferences: { largeText: false, reduceMotion: false },
});
const ids = (value) =>
  Array.isArray(value)
    ? [
        ...new Set(
          value.filter(
            (item) =>
              typeof item === "string" &&
              /^(html|css|tailwind|bootstrap)-\d{3}$/.test(item),
          ),
        ),
      ]
    : [];

export function getContinueLesson(lessons, state) {
  const last = lessons.find((lesson) => lesson.id === state.last);
  if (last && !state.completed.includes(last.id)) return last;
  return (
    lessons.find(
      (lesson) =>
        lesson.course === last?.course && !state.completed.includes(lesson.id),
    ) ||
    lessons.find((lesson) => !state.completed.includes(lesson.id)) ||
    last ||
    lessons[0]
  );
}

export function createStore(storage) {
  let data = defaults();
  let persistent = true;
  try {
    storage ??= globalThis.localStorage;
    if (!storage) throw Error("Storage unavailable");
    const raw = JSON.parse(storage.getItem(KEY) || "{}");
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      data = {
        ...data,
        completed: ids(raw.completed),
        saved: ids(raw.saved),
        last: ids([raw.last])[0] || null,
        activeDays: Array.isArray(raw.activeDays)
          ? [
              ...new Set(
                raw.activeDays.filter(
                  (day) =>
                    typeof day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(day),
                ),
              ),
            ]
          : [],
        preferences: {
          largeText: raw.preferences?.largeText === true,
          reduceMotion: raw.preferences?.reduceMotion === true,
        },
      };
    }
  } catch {
    /* Recover malformed data; unavailable storage is detected on write. */
  }
  const save = () => {
    try {
      storage.setItem(KEY, JSON.stringify(data));
    } catch {
      persistent = false;
    }
  };
  const active = () => {
    const date = new Date();
    const day = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    data.activeDays = [...new Set([...data.activeDays, day])].slice(-365);
  };
  return {
    get: () => structuredClone(data),
    get persistent() {
      return persistent;
    },
    complete(id, value = true) {
      if (!ids([id]).length) return;
      data.completed = data.completed.filter((item) => item !== id);
      if (value) {
        data.completed.push(id);
        active();
      }
      save();
    },
    bookmark(id) {
      if (!ids([id]).length) return;
      data.saved = data.saved.includes(id)
        ? data.saved.filter((item) => item !== id)
        : [...data.saved, id];
      save();
    },
    visit(id) {
      if (!ids([id]).length) return;
      data.last = id;
      active();
      save();
    },
    preference(name, value) {
      if (name in data.preferences) {
        data.preferences[name] = value === true;
        save();
      }
    },
  };
}
