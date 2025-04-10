import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-100 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0" ref={sectionRef}>
          <h2 className="section-heading inline-block">About Me</h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left column with decorative elements */}
          <div className="md:col-span-2 hidden md:block">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-lg p-8 transform rotate-3">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🎙️</div>
                      <div className="text-primary-800 font-medium">MC</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🚴‍♂️</div>
                      <div className="text-primary-800 font-medium">Cyclist</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🤿</div>
                      <div className="text-primary-800 font-medium">Scuba Diver</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🎨</div>
                      <div className="text-primary-800 font-medium">Creative</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-300 rounded-xl -rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary-300 rounded-full"></div>
            </div>
          </div>

          {/* Right column with text */}
          <div className="md:col-span-3 opacity-0" ref={textRef}>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-lg leading-relaxed">
                I'm <span className="font-semibold text-primary-700">Christopher Belgrave</span> – an Agile-certified Digital Project & Product Manager with over 18 years' experience leading creative and technical teams across the globe.
                My career spans agency, client-side, and freelance roles, working with top-tier brands including L'Oréal, Coca-Cola, British Airways, Apple, and Jimmy Choo.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                I specialise in <span className="font-semibold text-primary-700">AI workflows</span>, <span className="font-semibold text-accent-700">AR/VR experiences</span>, and <span className="font-semibold text-secondary-700">digital transformation</span> initiatives that scale. Whether it's managing a $3M+ production pipeline or pioneering
                generative AI adoption in content delivery, I bring together innovation, structure, and a collaborative mindset to make things happen.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond the screen, I'm an <span className="font-semibold text-accent-600">MC</span>, <span className="font-semibold text-primary-600">cyclist</span>, <span className="font-semibold text-secondary-600">scuba diver</span>, and lifelong <span className="font-semibold text-accent-600">creative</span>. I thrive on building human-first digital experiences that engage, inform, and transform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary-100 flex items-center space-x-3">
                  <div className="text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Experience</div>
                    <div className="font-medium">18+ Years</div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary-100 flex items-center space-x-3">
                  <div className="text-accent-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Projects Managed</div>
                    <div className="font-medium">100+</div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary-100 flex items-center space-x-3">
                  <div className="text-secondary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Teams Led</div>
                    <div className="font-medium">30+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;