// Wait for Alpine.js to be available
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        view: 'splash',
        email: '',
        password: '',
        isDarkMode: false,
        chatMessage: '',
        favorites: [
            {
                name: 'Crane Beach',
                image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
                experiences: 28
            },
            {
                name: 'Bridgetown',
                image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
                experiences: 42
            }
        ],
        chatMessages: [],
        activeNavItem: 'dashboard',
        isLoading: false,
        emailError: '',
        passwordError: '',
        showNotification: false,
        notificationMessage: '',
        currentTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),

        init() {
            // Load saved state
            this.loadFavorites();
            this.loadDarkMode();
            
            // Update time every minute
            setInterval(() => {
                this.currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }, 60000);
            
            // Show splash screen for 2 seconds
            setTimeout(() => {
                this.view = 'login';
            }, 2000);
        },

        loadFavorites() {
            const savedFavorites = localStorage.getItem('favorites');
            if (savedFavorites) {
                this.favorites = JSON.parse(savedFavorites);
            }
        },

        loadDarkMode() {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode) {
                this.isDarkMode = JSON.parse(savedDarkMode);
                document.documentElement.classList.toggle('dark', this.isDarkMode);
            }
        },

        showView(viewName) {
            this.view = viewName;
            // Only update activeNavItem for main navigation views
            if (['dashboard', 'explore', 'chat', 'profile'].includes(viewName)) {
                this.activeNavItem = viewName;
            }
            // Reset errors when changing views
            this.emailError = '';
            this.passwordError = '';
        },

        validateLogin() {
            let isValid = true;
            
            // Reset errors
            this.emailError = '';
            this.passwordError = '';
            
            // Email validation
            if (!this.email) {
                this.emailError = 'Email is required';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
                this.emailError = 'Please enter a valid email';
                isValid = false;
            }
            
            // Password validation
            if (!this.password) {
                this.passwordError = 'Password is required';
                isValid = false;
            } else if (this.password.length < 6) {
                this.passwordError = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            return isValid;
        },

        login() {
            if (!this.validateLogin()) return;
            
            this.isLoading = true;
            // Simulate API call
            setTimeout(() => {
                this.isLoading = false;
                this.showView('dashboard');
                this.showNotification = true;
                this.notificationMessage = 'Successfully logged in';
                setTimeout(() => this.showNotification = false, 3000);
            }, 1000);
        },

        signup() {
            if (!this.validateLogin()) return;
            
            this.isLoading = true;
            // Simulate API call
            setTimeout(() => {
                this.isLoading = false;
                this.showView('dashboard');
                this.showNotification = true;
                this.notificationMessage = 'Account created successfully';
                setTimeout(() => this.showNotification = false, 3000);
            }, 1000);
        },

        signOut() {
            this.view = 'login';
            this.email = '';
            this.password = '';
            this.showNotification = true;
            this.notificationMessage = 'Successfully signed out';
            setTimeout(() => this.showNotification = false, 3000);
        },

        sendMessage() {
            if (!this.chatMessage.trim()) return;

            // Add user message
            this.chatMessages.push({
                type: 'user',
                content: this.chatMessage
            });

            const userMessage = this.chatMessage;
            this.chatMessage = ''; // Clear input

            // Simulate AI response
            setTimeout(() => {
                this.chatMessages.push({
                    type: 'ai',
                    content: this.getAIResponse(userMessage)
                });

                // Scroll to bottom
                this.$nextTick(() => {
                    const chatMessages = document.getElementById('chat-messages');
                    if (chatMessages) {
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }
                });
            }, 1000);
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

        toggleFavorite(item) {
            const index = this.favorites.findIndex(f => f.name === item.name);
            if (index === -1) {
                this.favorites.push(item);
                this.showNotification = true;
                this.notificationMessage = 'Added to favorites';
            } else {
                this.favorites.splice(index, 1);
                this.showNotification = true;
                this.notificationMessage = 'Removed from favorites';
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            setTimeout(() => this.showNotification = false, 3000);
        },

        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.documentElement.classList.toggle('dark', this.isDarkMode);
            localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
        }
    }));
}); 