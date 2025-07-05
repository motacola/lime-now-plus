import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "AR Beauty Experience for Maybelline",
      tech: "WebAR, 3D Modeling, Threedium",
      description: "Led AR production and AI workflow setup for a L'Oréal-backed immersive beauty experience using WebAR and 3D technology.",
      icon: "💄", // Lipstick emoji
      color: "primary"
    },
    {
      title: "Global Campaign Delivery – Coca-Cola",
      tech: "WPP Agencies, Agile, Jira",
      description: "Managed end-to-end creative rollout for Sprite, Jack & Coke, and Topo Chico. Integrated across AKQA, Ogilvy, Wunderman, and others.",
      icon: "🥤", // Cup with straw emoji
      color: "accent"
    },
    {
      title: "Cross-Platform Music App – ROLI / PlayLUMI",
      tech: "React Native, Unity, C++",
      description: "Scrum-managed agile teams to deliver a musical app for ROLI's smart keyboard product. Coordinated with design, QA and API teams.",
      icon: "🎹", // Musical keyboard emoji
      color: "secondary"
    },
    {
      title: "Game Trailers – A Quiet Place & Rune Factory 5",
      tech: "ClickUp, Unreal, Maya",
      description: "Project managed trailer production from VO to post for AAA titles. Oversaw budgets, creative workflows, and dev delivery.",
      icon: "🎮", // Video game emoji
      color: "primary"
    },
    {
      title: "Luxury eCommerce – Jimmy Choo",
      tech: "Custom CMS, eComm",
      description: "Delivered full website design and build for Jimmy Choo's US retail platform. Focused on UX, stakeholder engagement, and launch management.",
      icon: "👟", // Athletic shoe emoji
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0" ref={sectionRef}>
          <h2 className="section-heading inline-block">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mt-2 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A selection of my recent work across immersive tech, global campaigns, and digital products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const delay = index * 100; // Stagger the animations

            return (
              <div
                key={index}
                className={`opacity-0 h-full`}
                ref={el => {
                  projectRefs.current[index] = el;
                }}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`card h-full flex flex-col bg-gradient-to-br from-${project.color}-50 to-white border border-${project.color}-100`}>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`text-4xl mr-4 bg-${project.color}-100 h-16 w-16 rounded-xl flex items-center justify-center shadow-sm`}>
                        {project.icon}
                      </div>
                      <h3 className={`text-xl font-semibold text-${project.color}-800`}>{project.title}</h3>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${project.color}-100 text-${project.color}-800 mb-4`}>
                      {project.tech}
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <div className={`mt-auto border-t border-${project.color}-100 p-4`}>
                    <div className={`text-${project.color}-600 font-medium flex items-center text-sm hover:text-${project.color}-800 transition-colors cursor-pointer`}>
                      <span>View Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;