// Utility Functions
const storage = {
  get(key, defaultValue) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.error(`Failed to load ${key} from storage`, e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to save ${key} to storage`, e);
    }
  }
};

const formatTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/js/service-worker.js');
      console.log('ServiceWorker registered with scope:', registration.scope);
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  });
}

// Dark Mode Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (storage.get('lime-dark-mode', false)) {
    document.documentElement.classList.add('dark');
  }
});

// Alpine.js App
document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    // State
    view: 'splash',
    activeNavItem: 'home',
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    darkMode: storage.get('lime-dark-mode', false),
    showNotification: false,
    notificationMessage: '',
    chatMessage: '',
    currentTime: formatTime(),
    favorites: storage.get('lime-favorites', []),
    settingsView: '',

    // Lifecycle
    init() {
      this.updateTime();
      this.loadDashboard(); // Simulate async dashboard load
    },

    // Time Management
    updateTime() {
      setInterval(() => {
        this.currentTime = formatTime();
      }, 60000);
    },

    // View Management
    showView(viewName) {
      this.view = viewName;
      this.activeNavItem = viewName === 'dashboard' ? 'home' : viewName;
      if (viewName === 'dashboard') this.loadDashboard();
    },

    // Login
    validateLogin() {
      this.emailError = '';
      this.passwordError = '';

      if (!this.email) this.emailError = 'Email is required';
      else if (!this.email.includes('@')) this.emailError = 'Invalid email format';

      if (!this.password) this.passwordError = 'Password is required';
      else if (this.password.length < 6) this.passwordError = 'Password must be at least 6 characters';

      if (!this.emailError && !this.passwordError) {
        this.showView('dashboard');
        this.notify('Welcome back!');
      }
    },

    // Dark Mode
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark');
      storage.set('lime-dark-mode', this.darkMode);
    },

    // Notifications
    notify(message, duration = 3000) {
      this.notificationMessage = message;
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, duration);
    },

    // Favorites
    toggleFavorite(item) {
      const index = this.favorites.findIndex(f => f.id === item.id);
      if (index === -1) {
        this.favorites.push(item);
        this.notify('Added to favorites!');
      } else {
        this.favorites.splice(index, 1);
        this.notify('Removed from favorites!');
      }
      storage.set('lime-favorites', this.favorites);
    },

    // Chat
    sendMessage() {
      if (!this.chatMessage.trim()) return;

      const chatMessages = document.querySelector('#chat-messages');
      this.appendChatMessage(chatMessages, 'user', this.chatMessage);
      const aiResponse = this.getAIResponse(this.chatMessage);
      setTimeout(() => {
        this.appendChatMessage(chatMessages, 'ai', aiResponse);
      }, 1000);
      this.chatMessage = '';
    },

    appendChatMessage(container, type, message) {
      const div = document.createElement('div');
      div.className = `flex items-start space-x-2 ${type === 'user' ? 'justify-end' : ''}`;
      div.innerHTML = `
        ${type === 'user' ? '' : `
          <div class="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        `}
        <div class="${type === 'user' ? 'bg-lime-500 text-white rounded-2xl rounded-tr-none' : 'bg-lime-50 rounded-2xl rounded-tl-none'} px-4 py-2 max-w-[80%]">
          <p class="${type === 'user' ? '' : 'text-gray-800'}">${message}</p>
        </div>
        ${type === 'user' ? `
          <div class="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        ` : ''}
      `;
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    },

    getAIResponse(message) {
      const lowerMessage = message.toLowerCase();
      const responses = {
        places: "Must-see spots in Barbados:\n\n• Crane Beach - Pink sands\n• Harrison's Cave - Underground wonder\n• Oistins Fish Fry - Friday night vibes\n• St. Nicholas Abbey - Rum heritage",
        food: "Try these Bajan delights:\n\n• Flying Fish & Cou Cou - National dish\n• Macaroni Pie - Cheesy goodness\n• Fish Cakes - Crispy bites\n• Rum Punch - Local kick",
        culture: "Bajan culture highlights:\n\n• Crop Over - Carnival vibes\n• Tuk Band - Folk beats\n• Cricket - National passion\n• Rum Shops - Social hubs",
        beaches: "Top beaches:\n\n• Crane Beach - Stunning cliffs\n• Miami Beach - Family-friendly\n• Bathsheba - Surf heaven\n• Carlisle Bay - Snorkel spot",
        weather: "Barbados weather:\n\n• 26-30°C year-round\n• Dry: Dec-May\n• Wet: Jun-Nov\n• Hurricanes rare"
      };
      return responses[Object.keys(responses).find(key => lowerMessage.includes(key))] ||
        "Ask me about places, food, culture, beaches, or weather!";
    },

    // Dashboard
    async loadDashboard() {
      const container = document.querySelector('#dashboard-container');
      container.innerHTML = '<div class="spinner"></div><p class="text-gray-600 mt-4">Loading dashboard...</p>';
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate async load
      container.innerHTML = `
        <header class="px-6 pt-8 pb-4">
          <h1 class="text-xl font-bold text-lime-800">Welcome, <span x-text="email.split('@')[0]"></span>!</h1>
        </header>
        <div class="flex-1 overflow-auto px-6">
          <div class="bg-lime-50 rounded-xl p-4 mb-4">
            <h2 class="text-lg font-semibold text-gray-800">Quick Stats</h2>
            <p class="text-gray-600 mt-2">Favorites: <span x-text="favorites.length"></span></p>
            <p class="text-gray-600">Last Chat: <span>${new Date().toLocaleDateString()}</span></p>
          </div>
        </div>
      `;
    },

    // Profile
    signOut() {
      this.view = 'login';
      this.email = '';
      this.password = '';
      this.notify('Signed out successfully!');
    },

    // Settings
    showSettingsPage(page) {
      this.settingsView = page;
    },

    closeSettingsPage() {
      this.settingsView = '';
    }
  }));
});
