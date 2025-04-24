import '../css/main.css';
import Alpine from 'alpinejs';

// Initialize Alpine.js
document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    // State
    view: 'splash',
    email: '',
    password: '',
    isDarkMode: false,
    favorites: [],
    chatMessages: [],
    activeNavItem: 'dashboard',
    settingsView: null,
    isLoading: false,
    showNotification: false,
    notificationMessage: '',

    // Initialize app
    init() {
      this.loadFavorites();
      this.initDarkMode();
      
      // Auto-advance from splash screen after 2 seconds
      if (this.view === 'splash') {
        setTimeout(() => {
          this.view = 'login';
        }, 2000);
      }
    },

    // View navigation
    showView(viewName) {
      this.view = viewName;
      this.activeNavItem = viewName;
    },

    // Login/Signup
    validateLogin() {
      if (!this.email || !this.password) {
        this.showNotification = true;
        this.notificationMessage = 'Please fill in all fields';
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
        return false;
      }
      return true;
    },

    login() {
      if (this.validateLogin()) {
        this.isLoading = true;
        // Simulate API call
        setTimeout(() => {
          this.isLoading = false;
          this.view = 'dashboard';
          this.showNotification = true;
          this.notificationMessage = 'Welcome back!';
          setTimeout(() => {
            this.showNotification = false;
          }, 3000);
        }, 1000);
      }
    },

    // Dark mode
    initDarkMode() {
      const savedMode = localStorage.getItem('darkMode');
      this.isDarkMode = savedMode === 'true';
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode);
    },

    // Favorites
    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites);
      }
    },

    // Sign out
    signOut() {
      this.view = 'login';
      this.email = '';
      this.password = '';
      this.showNotification = true;
      this.notificationMessage = 'Signed out successfully';
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
  }));
});

Alpine.start(); 