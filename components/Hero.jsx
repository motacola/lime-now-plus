import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center animated-bg">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>

      {/* Animated shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="block font-display">Christopher</span>
              <span className="block font-display gradient-text">Belgrave</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-700 font-display mb-6">
              Digital Project & Product Manager | CSPO
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Specialising in <span className="text-primary-600 font-semibold">immersive tech (AR/AI)</span>, <span className="text-accent-600 font-semibold">creative innovation</span>, and <span className="text-secondary-600 font-semibold">global digital delivery</span> for brands like L'Oréal, Coca-Cola, and Jimmy Choo. I lead agile teams to build future-ready digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          <div className={`hidden md:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              {/* This would be a good place for a profile image or creative illustration */}
              <div className="w-full h-64 sm:h-72 lg:h-96 bg-gradient-to-br from-primary-200 to-accent-100 rounded-2xl shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">👋</div>
                    <p className="text-xl font-medium text-primary-800">Hello, I'm Chris!</p>
                    <p className="text-primary-600 mt-2">MC • Cyclist • Scuba Diver • Creative</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-400 rounded-xl rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-primary-600 hover:text-primary-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;