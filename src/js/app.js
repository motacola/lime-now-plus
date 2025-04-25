import Alpine from 'alpinejs';
import '../css/styles.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      // Show a notification that there's an update available
      if (confirm('New content available. Reload?')) {
        updateSW(true);
      }
    },
    onOfflineReady() {
      // Removed debug log('App ready to work offline');
    },
  });
}

// Components are now static in the HTML
const components = {};

// App state management
const appState = {
  view: 'splash', // Start with splash screen
  activeTab: 'all',
  selectedDate: '13',
  selectedTime: '10:30 AM',
  transportAddon: true,
  refreshmentsAddon: false,
  showNotification: false,
  notificationMessage: '',
  likedItems: [],
  favorites: [],
  notificationCount: 2,
  darkMode: false,
  currentTime: '',
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
  components,

  init() {
    // Check dark mode from localStorage
    const savedDarkMode = localStorage.getItem('lime-dark-mode');
    if (savedDarkMode === 'true') {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    }

    // Load favorites if available
    try {
      const saved = localStorage.getItem('lime-favorites');
      if (saved) {
        this.favorites = JSON.parse(saved);
      }
    } catch (e) {
      // Error handled and surfaced to user('Failed to load favorites', e);
    }

    // Initialize components
    Object.values(this.components).forEach(component => {
      if (component.init) {
        component.init();
      }
    });

    // Update current time
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  },

  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    this.currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  },

  validateLogin() {
    let isValid = true;
    this.emailError = '';
    this.passwordError = '';

    // Validate email
    if (!this.email) {
      this.emailError = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(this.email)) {
      this.emailError = 'Please enter a valid email';
      isValid = false;
    }

    // Validate password
    if (!this.password) {
      this.passwordError = 'Password is required';
      isValid = false;
    } else if (this.password.length < 6) {
      this.passwordError = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (isValid) {
      this.view = 'dashboard';
    }
  },

  toggleFavorite(item) {
    if (this.favorites.includes(item)) {
      this.favorites = this.favorites.filter(i => i !== item);
      this.notificationMessage = 'Removed from favorites';
    } else {
      this.favorites.push(item);
      this.notificationMessage = 'Added to favorites';
    }
    this.showNotification = true;
    localStorage.setItem('lime-favorites', JSON.stringify(this.favorites));
    setTimeout(() => this.showNotification = false, 2000);
  },

  toggleLike(item, event) {
    if (event) event.stopPropagation();

    if (this.likedItems.includes(item)) {
      this.likedItems = this.likedItems.filter(i => i !== item);
    } else {
      this.likedItems.push(item);
    }
  },

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
    localStorage.setItem('lime-dark-mode', this.darkMode);
  },

  // Dashboard is now static in the HTML
  loadDashboard() {
    // No need to do anything as the dashboard is now static in the HTML
  },

  setupNavHandlers() {
    // Handle menu items with data-nav attributes
    const menuItems = document.querySelectorAll('[data-nav]');
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-nav');
        // Removed debug log(`Navigating to: ${target}`);
        this.view = target === 'home' ? 'dashboard' : target;
      });
    });

    // Fallback for older menu items without data-nav
    const homeBtn = document.querySelector('.home-btn');
    const profileBtn = document.querySelector('.profile-btn');

    if (homeBtn) homeBtn.addEventListener('click', () => this.view = 'dashboard');
    if (profileBtn) profileBtn.addEventListener('click', () => this.view = 'profile');
  },
};

// Register Alpine.js components and data
window.Alpine = Alpine;
Alpine.data('app', () => appState);
Alpine.start();

// After Alpine initializes, load components
import authModule from './modules/auth.js';
import dashboardModule from './modules/dashboard.js';
import chatModule from './modules/chat.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('auth', authModule);
  Alpine.data('dashboard', dashboardModule);
  Alpine.data('chat', chatModule);
  Alpine.data('app', () => ({
    ...appState,
    loadDashboard: () => {
      if (appState.view === 'dashboard') {
        appState.loadDashboard();
      }
    }
  }));
});

// Create event listener to watch for view changes
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('[x-data="app"]');
  if (appElement) {
    Alpine.effect(() => {
      const view = Alpine.store('app') ? Alpine.store('app').view : appElement.__x.$data.view;
      if (view === 'dashboard') {
        setTimeout(() => {
          appState.loadDashboard();
        }, 0);
      }
    });
  }
});