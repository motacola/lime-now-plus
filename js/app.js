// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Load favorites from localStorage
function loadFavorites() {
  try {
    const saved = localStorage.getItem('lime-favorites');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load favorites', e);
  }
  return [];
}

// Initialize dark mode from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('lime-dark-mode');
  if (savedDarkMode === 'true') {
    document.documentElement.classList.add('dark');
  }
});
