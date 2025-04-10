import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

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

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const skills = [
    {
      category: 'Technical Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'primary',
      items: [
        { name: 'Project Tools', level: 95, tools: 'Jira, Confluence, Monday, Smartsheet, Miro' },
        { name: 'Development', level: 85, tools: 'HTML5, CSS3, JavaScript, React Native, Unity' },
        { name: 'CMS/CRM', level: 90, tools: 'WordPress, Sitecore, HubSpot, Salesforce' },
        { name: 'Data & Analytics', level: 85, tools: 'GA4, Adobe Analytics, Looker, Tableau' },
        { name: 'AI/Immersive', level: 90, tools: 'Generative AI (Firefly/Runway), AR/VR (ARCore, Unity), Web3' }
      ]
    },
    {
      category: 'Project Management',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'accent',
      items: [
        { name: 'Agile & Waterfall', level: 95, tools: 'Scrum, Kanban, Traditional' },
        { name: 'Budget Management', level: 90, tools: 'Up to $3.4M' },
        { name: 'Backlog & User Stories', level: 90, tools: 'Refinement and management' },
        { name: 'Stakeholder Coordination', level: 95, tools: 'Vendor and team management' },
        { name: 'Workflow Automation', level: 85, tools: 'Process optimization and scaling' }
      ]
    },
    {
      category: 'Soft Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'secondary',
      items: [
        { name: 'Creative Leadership', level: 95, tools: 'Leading creative and technical teams' },
        { name: 'Stakeholder Communication', level: 95, tools: 'Executive and team communication' },
        { name: 'Strategic Visioning', level: 90, tools: 'Long-term planning and strategy' },
        { name: 'Cross-functional Collaboration', level: 95, tools: 'Team integration and management' },
        { name: 'Mentoring', level: 90, tools: 'Team development and growth' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-100 rounded-tr-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0" ref={sectionRef}>
          <h2 className="section-heading inline-block">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mt-2 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A comprehensive set of skills developed through years of experience in digital project and product management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => {
            const delay = index * 200; // Stagger the animations

            return (
              <div
                key={index}
                className={`card p-6 opacity-0`}
                ref={el => skillRefs.current[index] = el}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`flex items-center mb-6`}>
                  <div className={`text-${skillCategory.color}-600 mr-3`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold text-${skillCategory.color}-800`}>
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillCategory.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-800">{item.name}</span>
                        <span className={`text-sm font-semibold text-${skillCategory.color}-600`}>{item.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: '0%', transitionDelay: `${(itemIndex * 100) + 500}ms` }}
                          data-width={`${item.level}%`}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{item.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Add this script to animate skill bars when they come into view
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }, 1000);
  });
}

export default Skills;