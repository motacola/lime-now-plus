import Alpine from 'alpinejs';

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

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
    toast: {
      show: false,
      message: '',
      type: 'success'
    },

    // Initialize app
    init() {
      // Load saved state
      this.loadFavorites();
      this.loadDarkMode();
      
      // Show splash screen for 2 seconds
      setTimeout(() => {
        this.view = 'login';
      }, 2000);
    },

    // View navigation
    showView(viewName) {
      this.view = viewName;
      this.activeNavItem = viewName;
    },

    // Login/Signup
    validateLogin() {
      if (!this.email || !this.password) {
        this.showToast('Please fill in all fields', 'error');
        return false;
      }
      return true;
    },

    login() {
      if (!this.validateLogin()) return;
      
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showView('dashboard');
        this.showToast('Successfully logged in', 'success');
      }, 1000);
    },

    signup() {
      if (!this.validateLogin()) return;
      
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showView('dashboard');
        this.showToast('Account created successfully', 'success');
      }, 1000);
    },

    // Chat functionality
    setupChatHandlers() {
      const chatInput = document.getElementById('chat-input');
      if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            this.sendMessage();
          }
        });
      }
    },

    sendMessage() {
      const chatInput = document.getElementById('chat-input');
      if (!chatInput || !chatInput.value.trim()) return;

      const message = chatInput.value.trim();
      this.chatMessages.push({
        type: 'user',
        content: message
      });

      // Simulate AI response
      setTimeout(() => {
        this.chatMessages.push({
          type: 'ai',
          content: this.getAIResponse(message)
        });
      }, 1000);

      chatInput.value = '';
    },

    getAIResponse(message) {
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('place') || lowerMessage.includes('location')) {
        return 'I can help you find great places to visit! What kind of place are you looking for?';
      } else if (lowerMessage.includes('food') || lowerMessage.includes('restaurant')) {
        return 'I know some amazing local restaurants! Would you like recommendations for any specific cuisine?';
      } else if (lowerMessage.includes('culture') || lowerMessage.includes('history')) {
        return 'The local culture is rich and fascinating! Would you like to learn about specific cultural events or historical sites?';
      } else if (lowerMessage.includes('beach') || lowerMessage.includes('ocean')) {
        return 'The beaches here are beautiful! I can recommend some great spots for swimming, surfing, or just relaxing.';
      } else if (lowerMessage.includes('weather') || lowerMessage.includes('temperature')) {
        return 'I can help you check the weather! Would you like to know the current conditions or a forecast?';
      } else {
        return 'I\'m here to help you explore! You can ask me about places to visit, local food, culture, beaches, or weather.';
      }
    },

    // Favorites
    loadFavorites() {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        this.favorites = JSON.parse(savedFavorites);
      }
    },

    toggleFavorite(item) {
      const index = this.favorites.indexOf(item);
      if (index === -1) {
        this.favorites.push(item);
        this.showToast('Added to favorites', 'success');
      } else {
        this.favorites.splice(index, 1);
        this.showToast('Removed from favorites', 'success');
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    // Dark mode
    loadDarkMode() {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode) {
        this.isDarkMode = JSON.parse(savedDarkMode);
        document.documentElement.classList.toggle('dark', this.isDarkMode);
      }
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark', this.isDarkMode);
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    },

    // Settings
    showSettingsPage(page) {
      // Implement settings page navigation
      console.log(`Showing settings page: ${page}`);
    },

    closeSettingsPage() {
      this.settingsView = null;
    },

    // Toast notifications
    showToast(message, type = 'success') {
      this.toast = {
        show: true,
        message,
        type
      };
      setTimeout(() => {
        this.toast.show = false;
      }, 3000);
    },

    // Sign out
    signOut() {
      this.view = 'login';
      this.showToast('Successfully signed out', 'success');
    }
  }));
}); 