import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const experiences = [
    {
      company: "Craft Worldwide",
      role: "Senior Project Manager EMEA",
      period: "2023 – 2024",
      description: "Oversaw AR/AI/3D projects for L'Oréal, integrating new agency (Threedium) into workflow and setting up AI-driven production systems.",
      achievements: [
        "Led AR/AI/3D projects for L'Oréal",
        "Integrated Threedium into workflow",
        "Set up AI-driven production systems",
        "Managed offshore team collaboration"
      ],
      color: "primary",
      icon: "💼" // Briefcase emoji
    },
    {
      company: "WPP OpenX (Coca-Cola)",
      role: "Senior Project Manager",
      period: "2021 – 2022",
      description: "Managed global rollout across 8 WPP agencies, working on Fanta, Sprite, Topo Chico, and Jack & Coke campaigns.",
      achievements: [
        "Managed global rollout across 8 WPP agencies",
        "Worked on Fanta, Sprite, Topo Chico, Jack & Coke",
        "Drove agile integration between creative and media teams"
      ],
      color: "accent",
      icon: "🍺" // Beer mug emoji
    },
    {
      company: "ROLI, Sullivan & Stanley, Critical Mass",
      role: "Product Manager / Business Analyst",
      period: "2019 – 2021",
      description: "Built cross-platform music app, designed omnichannel tech stack, and implemented GDPR cookie compliance for Mitsubishi.",
      achievements: [
        "Built cross-platform music app",
        "Designed omnichannel tech stack",
        "Implemented GDPR cookie compliance for Mitsubishi"
      ],
      color: "secondary",
      icon: "💻" // Laptop emoji
    },
    {
      company: "Belgrave Digital",
      role: "Freelance PM/Producer",
      period: "2014 – 2019",
      description: "Delivered integrated campaigns for brands including Apple, Emirates, and L'Oréal, managing global digital assets and web builds.",
      achievements: [
        "Delivered integrated campaigns for Apple, Emirates, L'Oréal",
        "Managed global digital assets and CRM campaigns",
        "Led multiple successful web builds"
      ],
      color: "primary",
      icon: "🌟" // Glowing star emoji
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-primary-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0" ref={sectionRef}>
          <h2 className="section-heading inline-block">Professional Journey</h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mt-2 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A timeline of my professional experience and key achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-accent-300 to-secondary-300 transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              const delay = index * 200; // Stagger the animations

              return (
                <div
                  key={experience.company}
                  className={`relative opacity-0 ${isEven ? 'md:ml-auto' : ''}`}
                  ref={el => timelineRefs.current[index] = el}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-4 border-white z-10">
                      <div className={`w-full h-full rounded-full bg-${experience.color}-100 flex items-center justify-center text-${experience.color}-600 text-xl`}>
                        {experience.icon}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`card p-6 md:w-5/12 ${isEven ? 'md:mr-16' : 'md:ml-16'} bg-white`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${experience.color}-100 text-${experience.color}-800 mb-4`}>
                        {experience.period}
                      </div>
                      <h3 className={`text-xl font-semibold text-${experience.color}-800 mb-1`}>
                        {experience.role}
                      </h3>
                      <p className="text-lg font-medium text-gray-600 mb-3">
                        {experience.company}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {experience.description}
                      </p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start">
                            <svg className={`h-5 w-5 flex-shrink-0 text-${experience.color}-500 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="ml-2 text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}