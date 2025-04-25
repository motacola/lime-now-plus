# Lime Now+ App

Don't just visit. Lime like a local.

A progressive web app (PWA) for "Lime Now+" - a tourism/local experience app for Barbados.

## Live Demo

Visit the live demo at [lime-now-plus.vercel.app](https://lime-now-plus-37zcqdgo0-chrisbelgrave-gmailcoms-projects.vercel.app/)

## Feedback

We're actively seeking feedback on the app! Please try it out and let us know what you think by:

1. Using the app and exploring all features
2. Noting any bugs or issues you encounter
3. Sharing your thoughts on the user interface and experience
4. Suggesting improvements or new features

You can provide feedback by:
- Creating an issue on GitHub
- Emailing your feedback to chrisbelgrave@gmail.com
- Using the feedback form at [feedback form link]

## Features

- Splash screen with app introduction
- Login/Signup functionality with form validation
- Dashboard with personalized recommendations
- Interactive chat with AI travel assistant
- Profile view with user information and favorites
- Event details view with booking functionality
- Dark mode support
- Accessibility improvements
- Responsive design
- Offline functionality (PWA)

## Technologies Used

- Vite build system
- TailwindCSS for styling
- Alpine.js for interactivity
- PWA capabilities for offline access
- Component-based architecture
- LocalStorage for data persistence

## Project Structure

```plaintext
lime-now-plus-vite/
├── index.html        # Main HTML entry point
├── public/           # Public static assets
│   └── manifest.webmanifest  # PWA manifest
├── src/              # Source code
│   ├── css/          # CSS styles
│   │   └── styles.css # Main CSS file with Tailwind directives
│   ├── js/           # JavaScript files
│   │   └── app.js    # Main Alpine.js application
│   ├── components/   # Alpine.js components
│   │   └── Dashboard.js # Dashboard component
│   └── views/        # View templates
├── vite.config.js    # Vite configuration with PWA support
├── tailwind.config.js # Tailwind CSS configuration
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lime-now-plus.git
cd lime-now-plus-vite

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Building for Production

```bash
npm run build
```

The built application will be available in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Improvements Made

- **Code Organization**: Implemented component-based architecture
- **Performance**: Set up Vite build system for optimized assets
- **PWA Support**: Added service worker for offline access
- **Form Validation**: Added client-side validation for login form
- **Accessibility**: Improved ARIA attributes and keyboard navigation
- **Dark Mode**: Added persistent dark mode preference

## Future Improvements

- Connect to a backend service (Firebase/Supabase)
- Add more comprehensive form validation
- Implement proper authentication flow
- Add more views and functionality
- Enhance offline capabilities with better caching strategies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
