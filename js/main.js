// Shared JavaScript file loaded by every page.

// This message confirms that the shared script has loaded.
console.log('Edge Computing website loaded successfully.');

// == Theme selection ==

const themeSelect = document.getElementById('theme-select');
const themePreferenceKey = 'themePreference';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// Apply the selected theme.
function applyTheme(preference) {
  let activeTheme = preference;

  // System mode follows the visitor's device preference.
  if (preference === 'system') {
    activeTheme = systemTheme.matches ? 'dark' : 'light';
  }

  document.documentElement.dataset.theme = activeTheme;

  // Keep the dropdown synchronized with the saved preference.
  if (themeSelect) {
    themeSelect.value = preference;
  }
}

// Load the saved preference, using Light as the default.
let savedTheme = localStorage.getItem(themePreferenceKey) || 'light';

// Apply the theme when the page loads.
applyTheme(savedTheme);

// Save and apply a new selection.
if (themeSelect) {
  themeSelect.addEventListener('change', function () {
    savedTheme = themeSelect.value;

    localStorage.setItem(themePreferenceKey, savedTheme);
    applyTheme(savedTheme);
  });
}

// Update the website when the device theme changes.
// This only affects the page when System mode is selected.
systemTheme.addEventListener('change', function () {
  if (savedTheme === 'system') {
    applyTheme('system');
  }
});

// == Navigation scroll behaviour ==

// Make navigation float when scrolling.
const navigation = document.querySelector('.site-header nav');

if (navigation) {
  let isFloating = false;
  let fadeTimer;

  // Preserve the original navigation space.
  const navPlaceholder = document.createElement('div');
  navPlaceholder.style.height = navigation.offsetHeight + 'px';
  navPlaceholder.style.display = 'none';

  navigation.parentNode.insertBefore(navPlaceholder, navigation);

  function updateNavigation() {
    if (window.scrollY > 150 && !isFloating) {
      clearTimeout(fadeTimer);
      isFloating = true;

      navPlaceholder.style.display = 'block';

      navigation.classList.remove('fade-out');
      navigation.classList.add('scrolled');
    } else if (window.scrollY <= 150 && isFloating) {
      isFloating = false;

      // Restore original navigation immediately.
      navigation.classList.remove('scrolled', 'fade-out');
      navPlaceholder.style.display = 'none';
    }
  }

  window.addEventListener('scroll', updateNavigation);
  updateNavigation();
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
