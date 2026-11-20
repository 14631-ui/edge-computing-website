// Shared JavaScript file loaded by every page.

// This message confirms that the shared script has loaded.
console.log('Edge Computing website loaded successfully.');

// == Theme selection ==

const themeSelect = document.getElementById('theme-select');
const themePreferenceKey = 'themePreference';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(preference) {
  let activeTheme = preference;

  if (preference === 'system') {
    activeTheme = systemTheme.matches ? 'dark' : 'light';
  }

  document.documentElement.dataset.theme = activeTheme;

  if (themeSelect) {
    themeSelect.value = preference;
  }
}

let savedTheme = localStorage.getItem(themePreferenceKey) || 'light';

applyTheme(savedTheme);

if (themeSelect) {
  themeSelect.addEventListener('change', function () {
    savedTheme = themeSelect.value;
    localStorage.setItem(themePreferenceKey, savedTheme);
    applyTheme(savedTheme);
  });
}

systemTheme.addEventListener('change', function () {
  if (savedTheme === 'system') {
    applyTheme('system');
  }
});

// == Desktop / Mobile layout selection ==

const layoutToggle = document.getElementById('layout-toggle');
const layoutPreferenceKey = 'layoutPreference';
const mobileScreen = window.matchMedia('(max-width: 760px)');

let savedLayout = localStorage.getItem(layoutPreferenceKey);

// Only accept the two supported manual settings.
if (savedLayout !== 'mobile' && savedLayout !== 'desktop') {
  savedLayout = null;
}

function getAutomaticLayout() {
  return mobileScreen.matches ? 'mobile' : 'desktop';
}

function applyLayout(preference) {
  if (preference) {
    document.documentElement.dataset.layout = preference;
  } else {
    // No manual preference: let the existing responsive CSS decide.
    delete document.documentElement.dataset.layout;
  }

  if (layoutToggle) {
    const currentLayout = preference || getAutomaticLayout();

    layoutToggle.textContent =
      currentLayout === 'mobile' ? 'Desktop view' : 'Mobile view';
  }
}

// Apply the saved layout when the page loads.
applyLayout(savedLayout);

if (layoutToggle) {
  layoutToggle.addEventListener('click', function (event) {
    event.preventDefault();

    const currentLayout = savedLayout || getAutomaticLayout();

    savedLayout = currentLayout === 'mobile' ? 'desktop' : 'mobile';

    localStorage.setItem(layoutPreferenceKey, savedLayout);
    applyLayout(savedLayout);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });
}

// Keep the link label accurate when the screen is resized in automatic mode.
mobileScreen.addEventListener('change', function () {
  if (!savedLayout) {
    applyLayout(null);
  }
});

// Reapply saved theme and layout when returning through browser history
window.addEventListener('pageshow', function () {
  // Restore the saved theme
  const storedTheme = localStorage.getItem(themePreferenceKey);

  savedTheme =
    storedTheme === 'light' ||
    storedTheme === 'dark' ||
    storedTheme === 'system'
      ? storedTheme
      : 'light';

  if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.dispatchEvent(new Event('change'));
  } else {
    applyTheme(savedTheme);
  }

  // Restore the saved layout
  const storedLayout = localStorage.getItem(layoutPreferenceKey);

  savedLayout =
    storedLayout === 'mobile' || storedLayout === 'desktop'
      ? storedLayout
      : null;

  applyLayout(savedLayout);
});

// == YouTube video click-to-load ==

const loadVideoButton = document.getElementById('load-video');

if (loadVideoButton) {
  loadVideoButton.addEventListener('click', function () {
    const iframe = document.createElement('iframe');

    iframe.src = 'https://www.youtube.com/embed/cEOUeItHDdo?autoplay=1&rel=0';

    iframe.title = 'IBM Technology: What Is Edge Computing?';
    iframe.width = '560';
    iframe.height = '315';

    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    const container = document.getElementById('video-container');

    if (container) {
      container.replaceChildren(iframe);
    }
  });
}

// == Back to Top button ==

const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  function updateBackToTop() {
    if (window.scrollY > 75) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', updateBackToTop);
  updateBackToTop();
}

// Theme icon buttons
(function () {
  const select = document.getElementById('theme-select');
  const buttons = document.querySelectorAll('.theme-button');

  if (!select || buttons.length === 0) return;

  function updateButtons() {
    buttons.forEach(function (button) {
      const active = button.dataset.themeChoice === select.value;

      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      select.value = button.dataset.themeChoice;

      select.dispatchEvent(new Event('change', { bubbles: true }));

      updateButtons();
    });
  });

  select.addEventListener('change', updateButtons);

  updateButtons();
})();
