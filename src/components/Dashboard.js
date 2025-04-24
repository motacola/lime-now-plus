export default function Dashboard() {
  return {
    init() {
      // Component initialization logic here
    },
    
    // Get the HTML for the dashboard view
    getHtml() {
      return `
        <div class="flex flex-col justify-between h-full pt-8">
          <div class="overflow-y-auto pb-4 px-2">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold text-gray-800">Hello, Chris <span class="wave">👋</span></h2>
              <div class="relative">
                <div class="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center cursor-pointer" @click="view = 'profile'">
                  <span class="text-lime-600 font-medium">CB</span>
                </div>
                <div class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full" x-show="notificationCount > 0" x-text="notificationCount"></div>
              </div>
            </div>
            
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-sm font-medium text-gray-500">TODAY'S PICKS</h3>
              <button class="text-lime-600 text-xs font-medium">See All</button>
            </div>
            
            <div class="mb-6">
              <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3 hover:shadow-md transition-shadow cursor-pointer" @click="view = 'booking'">
                <div class="flex items-start justify-between">
                  <div class="flex items-start">
                    <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                      🔥
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-800">Sunset Catamaran Cruise</h4>
                      <p class="text-sm text-gray-500">5:30 PM · $65 per person</p>
                      <div class="flex items-center mt-1">
                        <div class="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span class="text-xs text-gray-500 ml-1">(42)</span>
                      </div>
                    </div>
                  </div>
                  <button class="text-gray-400 hover:text-red-500 transition-colors" 
                          @click.stop="toggleLike('catamaran', $event); $el.classList.add('heart-beat')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="{'text-red-500 fill-current': likedItems.includes('catamaran')}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-sm font-medium text-gray-500">NEARBY EVENTS</h3>
              <button class="text-lime-600 text-xs font-medium">View Map</button>
            </div>
            
            <div class="mb-6">
              <div class="relative overflow-hidden rounded-xl mb-3 hover:shadow-md transition-shadow cursor-pointer" @click="view = 'event-details'">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" class="w-full h-32 object-cover rounded-xl" loading="lazy" />
                <div class="absolute top-2 right-2 z-10">
                  <button class="w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors" 
                          @click.stop="toggleFavorite('reggae')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'text-red-500 fill-current': favorites.includes('reggae')}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 class="font-medium text-white">Reggae on the Beach</h4>
                  <div class="flex justify-between items-center">
                    <p class="text-xs text-gray-200">Brownes Beach · 1 mile away</p>
                    <span class="text-xs bg-lime-500 text-white px-2 py-0.5 rounded-full">8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-around items-center py-4 border-t bg-white">
            <button class="flex flex-col items-center text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="text-xs mt-1 font-medium">Home</span>
            </button>
            <button @click="view = 'explore'" class="flex flex-col items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-xs mt-1">Explore</span>
            </button>
            <button @click="view = 'booking'" class="flex flex-col items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-xs mt-1">Bookings</span>
            </button>
            <button @click="view = 'chatbot'" class="flex flex-col items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span class="text-xs mt-1">Chat</span>
            </button>
          </div>
        </div>
      `;
    }
  };
} 