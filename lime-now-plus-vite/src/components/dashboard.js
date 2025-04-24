const Dashboard = {
  // Render method returns HTML for the dashboard
  render() {
    return `
      <div class="h-full flex flex-col overflow-hidden">
        <header class="flex justify-between items-center px-6 pt-8 pb-4 bg-gradient-to-r from-lime-50 to-lime-100 rounded-b-2xl shadow-sm">
          <div>
            <h1 class="text-xl font-bold text-lime-800">Dashboard</h1>
            <p class="text-xs text-gray-500" id="greeting-text">Good morning</p>
          </div>
          <div class="w-9 h-9 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </header>
        
        <div class="flex-1 overflow-auto px-6 py-4 main-content pb-16">
          <!-- Weather Card -->
          <div class="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-4 flex justify-between text-white mb-6 shadow-md">
            <div>
              <h2 class="font-medium">Current Weather</h2>
              <p class="text-3xl font-bold mt-1">29°C</p>
              <p class="text-sm opacity-90">Bridgetown, Barbados</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          
          <!-- Featured Experiences -->
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Featured Experiences</h2>
          <div class="relative overflow-x-auto hide-scrollbar mb-6">
            <div class="flex space-x-4 pb-2 w-max">
              <div class="w-64 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md">
                <div class="h-32 relative">
                  <img src="https://images.unsplash.com/photo-1515119678020-c4fc7de44882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" class="h-full w-full object-cover" alt="Catamaran Cruise">
                  <div class="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center space-x-1 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span class="text-gray-700 text-xs font-medium">4.9 (127)</span>
                  </div>
                  <h3 class="font-semibold text-gray-800">Catamaran Sunset Cruise</h3>
                  <p class="text-gray-500 text-xs mt-1">3-hour cruise with snorkeling and open bar</p>
                  <div class="flex justify-between items-center mt-3">
                    <span class="text-lime-600 font-bold">$85</span>
                    <button class="bg-lime-500 hover:bg-lime-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-sm transition">Book Now</button>
                  </div>
                </div>
              </div>
              
              <div class="w-64 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md">
                <div class="h-32 relative">
                  <img src="https://images.unsplash.com/photo-1531078350211-9f774509aae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" class="h-full w-full object-cover" alt="Island Safari">
                  <div class="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center space-x-1 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span class="text-gray-700 text-xs font-medium">4.8 (94)</span>
                  </div>
                  <h3 class="font-semibold text-gray-800">Island Safari Adventure</h3>
                  <p class="text-gray-500 text-xs mt-1">Off-road tour with lunch and beach stops</p>
                  <div class="flex justify-between items-center mt-3">
                    <span class="text-lime-600 font-bold">$95</span>
                    <button class="bg-lime-500 hover:bg-lime-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-sm transition">Book Now</button>
                  </div>
                </div>
              </div>
              
              <div class="w-64 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md">
                <div class="h-32 relative">
                  <img src="https://images.unsplash.com/photo-1589394547441-5a2e11e58c4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" class="h-full w-full object-cover" alt="Food Tour">
                  <div class="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center space-x-1 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span class="text-gray-700 text-xs font-medium">4.7 (82)</span>
                  </div>
                  <h3 class="font-semibold text-gray-800">Barbados Food Tour</h3>
                  <p class="text-gray-500 text-xs mt-1">Sample local cuisine with an expert guide</p>
                  <div class="flex justify-between items-center mt-3">
                    <span class="text-lime-600 font-bold">$65</span>
                    <button class="bg-lime-500 hover:bg-lime-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-sm transition">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Upcoming Events -->
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Upcoming Events</h2>
          <div class="space-y-3 mb-8">
            <div class="bg-white rounded-2xl p-4 shadow-md flex items-start space-x-3">
              <div class="w-12 h-12 bg-lime-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                <span class="text-lime-700 text-xs font-medium">AUG</span>
                <span class="text-lime-800 text-lg font-bold leading-tight">15</span>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-800">Crop Over Festival</h3>
                <p class="text-gray-500 text-xs mt-1">The grand finale of Barbados' biggest cultural festival</p>
                <div class="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-500 text-xs">Spring Garden Highway, Bridgetown</span>
                </div>
              </div>
              <button class="bg-lime-100 hover:bg-lime-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            
            <div class="bg-white rounded-2xl p-4 shadow-md flex items-start space-x-3">
              <div class="w-12 h-12 bg-lime-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                <span class="text-lime-700 text-xs font-medium">AUG</span>
                <span class="text-lime-800 text-lg font-bold leading-tight">20</span>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-800">Oistins Fish Fry</h3>
                <p class="text-gray-500 text-xs mt-1">Weekly fish fry with local food, music and crafts</p>
                <div class="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-500 text-xs">Oistins Bay Garden, Christ Church</span>
                </div>
              </div>
              <button class="bg-lime-100 hover:bg-lime-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <nav class="app-navigation">
          <div class="grid grid-cols-4 gap-2">
            <button data-nav="dashboard" class="menu-item active">
              <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="text-xs font-medium">Home</span>
            </button>
            
            <button data-nav="explore" class="menu-item">
              <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span class="text-xs font-medium">Explore</span>
            </button>
            
            <button data-nav="chat" class="menu-item">
              <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span class="text-xs font-medium">Chat</span>
            </button>
            
            <button data-nav="profile" class="menu-item">
              <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-xs font-medium">Profile</span>
            </button>
          </div>
        </nav>
      </div>
    `;
  },
  
  // Initialize method for adding event listeners and other functionality
  init(app) {
    console.log('Initializing dashboard component');
    
    // Set personalized greeting based on time of day
    const hour = new Date().getHours();
    let greeting = 'Good morning';
    
    if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon';
    } else if (hour >= 17) {
      greeting = 'Good evening';
    }
    
    // Get user email to personalize greeting
    const userEmail = localStorage.getItem('userEmail');
    const firstName = userEmail ? userEmail.split('@')[0] : '';
    
    // Update greeting text
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement && firstName) {
      greetingElement.textContent = `${greeting}, ${firstName}`;
    } else if (greetingElement) {
      greetingElement.textContent = greeting;
    }
    
    // Add event listeners to buttons
    const bookNowButtons = document.querySelectorAll('button.bg-lime-500');
    bookNowButtons.forEach(button => {
      button.addEventListener('click', () => {
        console.log('Book now clicked');
        app.showNotification('Booking initiated!');
      });
    });
    
    // Add hide-scrollbar style to head if not already present
    if (!document.querySelector('style#dashboard-styles')) {
      const style = document.createElement('style');
      style.id = 'dashboard-styles';
      style.textContent = `
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);
    }
  }
};

export default Dashboard; 