(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const storageKey = 'tailwind-best-practice-theme';
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');

  function setTheme(mode) {
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(storageKey, mode);
    if (sunIcon && moonIcon) {
      sunIcon.classList.toggle('hidden', mode !== 'light');
      moonIcon.classList.toggle('hidden', mode !== 'dark');
    }
  }

  const saved = localStorage.getItem(storageKey);
  if (saved) {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  const faqToggles = document.querySelectorAll('[data-accordion-button]');
  faqToggles.forEach((btn) => {
    const targetId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    if (!panel) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.dataset.state = expanded ? 'closed' : 'open';
    });
  });

  const observer = window.matchMedia('(prefers-reduced-motion: reduce)');
  function updateMotionPreference() {
    document.body.dataset.reducedMotion = observer.matches ? 'true' : 'false';
  }
  observer.addEventListener('change', updateMotionPreference);
  updateMotionPreference();
})();
