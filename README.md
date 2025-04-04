# Lime Now+ App

A mobile app interface prototype for "Lime Now+" - a tourism/local experience app with the tagline "Don't just visit. Lime like a local."

## Features

- Splash screen with app introduction
- Login/Signup functionality with form validation
- Dashboard with personalized recommendations
- Profile view with user information and favorites
- Event details view with booking functionality
- Dark mode support
- Accessibility improvements
- Responsive design

## Technologies Used

- HTML5
- TailwindCSS for styling
- Alpine.js for interactivity
- LocalStorage for data persistence

## Project Structure

```plaintext
lime-now-plus/
├── index.html        # Main HTML file
├── css/
│   └── styles.css    # Extracted CSS styles
├── js/
│   └── app.js        # Alpine.js components and functionality
├── components/       # For future component extraction
├── views/            # For future view templates
├── assets/           # For images and other static assets
└── README.md         # This file
```

## Improvements Made

- **Code Organization**: Split CSS and JS into separate files
- **Component Structure**: Implemented Alpine.js components for better organization
- **Form Validation**: Added client-side validation for login form
- **Accessibility**: Added ARIA attributes and improved keyboard navigation
- **Performance**: Used x-if instead of x-show for views to reduce DOM size
- **Dark Mode**: Added dark mode toggle with persistent preference
- **Animation Fixes**: Resolved animation conflicts and improved transitions

## How to Run

Simply open the `index.html` file in a web browser or serve it using a local web server:

```bash
# Using Python's built-in HTTP server
python -m http.server

# Or using any other local server of your choice
```

## Future Improvements

- Add a proper router for better navigation
- Connect to a backend service (Firebase/Supabase)
- Implement PWA capabilities for offline use
- Add more comprehensive form validation
- Create a fully componentized architecture
- Implement proper authentication flow
