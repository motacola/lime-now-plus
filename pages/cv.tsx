import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'about', title: 'About Me' },
  { id: 'career', title: 'Career History' },
  { id: 'skills', title: 'Skills & Technologies' },
  { id: 'education', title: 'Education & Certifications' },
  { id: 'activities', title: 'Activities & Interests' }
];

const careerEntries = [
  {
    title: 'Craft Worldwide – Senior Project Manager EMEA',
    period: 'May 2023 – Nov 2023',
    details: `Spearheaded initiatives across AR, video, AI automation. Managed client relationships, integrated Threedium for Maybelline AR, and led global AI workflows and virtual studio transformations.`
  },
  {
    title: 'WPP | OpenX – Senior Project Manager, Marketing & Growth',
    period: 'Dec 2021 – Oct 2022',
    details: `Delivered global Coca-Cola campaigns (Sprite, Fanta, Jack & Coke, Topo Chico). Worked across WPP agencies (Ogilvy, AKQA, Grey, Wunderman, VMLY&R) with agile and OpenX models.`
  },
  {
    title: 'Trailer Farm – Project Manager',
    period: 'Oct 2021 – Jan 2022',
    details: `Managed AAA video game trailers using Unreal/Unity for Marvelous Games and A Quiet Place. Led cross-functional teams with VO, devs, and post-production in ClickUp.`
  },
  {
    title: 'RG/A – Senior Project Manager',
    period: 'Jun 2021 – Oct 2021',
    details: `Led Allianz projects using RACI, UX/UI planning in Figma/Miro. Managed SOWs, budgets, stand-ups and Confluence documentation.`
  },
  {
    title: 'Sullivan and Stanley – Business Analyst / Product Owner',
    period: 'Dec 2020 – Feb 2021',
    details: `Captured requirements to build omnichannel tech stack (CDP, CRM, DAM). Operated under NDA with an enterprise-level client.`
  },
  {
    title: 'Critical Mass – Business Analyst / PO',
    period: 'Mar 2020 – Jun 2020',
    details: `For Mitsubishi: wrote user stories, implemented GDPR cookie compliance and GTM integrations in agile 2-week sprints.`
  },
  {
    title: 'Sennep – Product Manager (PlayLUMI)',
    period: 'Jul 2019 – Nov 2019',
    details: `Managed cross-platform music app for ROLI's smart keyboard. Delivered in 2-week agile sprints using React Native, Unity, and C++.`
  },
  {
    title: 'Gildan – Project Manager',
    period: 'Jun 2018 – Sep 2018',
    details: `Redesigned eCommerce sites for American Apparel. Oversaw Oracle JDEdwards integration, budgeting, and daily Smartsheet project tasks.`
  },
  {
    title: 'Belgrave Digital – Freelance Producer/PM',
    period: 'Oct 2014 – 2021',
    details: `Delivered high-profile campaigns and site builds for Apple, L'Oréal, Galaxy, BA, Fitbit, Sainsbury's. Launched gacaribbean.com and uk.mixa.com.`
  },
  {
    title: 'Meri Media – Senior PM',
    period: 'Nov 2014 – Jan 2015',
    details: `Launched Diesel D:CODE line and Dunhill luxury CRM. Oversaw creative/dev teams, SOWs, and brand guidelines.`
  },
  {
    title: 'Red Bee Media – Digital Producer',
    period: 'Feb 2014 – Oct 2014',
    details: `Produced BBC/UKTV banner games (e.g. Doctor Who), pitch materials, and daily UX/dev team delivery.`
  },
  {
    title: 'Leagas Delaney – Digital Projects Director',
    period: 'Nov 2013 – Dec 2013',
    details: `Led global campaigns for Patek Philippe, iAd rich media, Facebook apps and creative outsourcing for brands like MSC, Feel Unique.`
  },
  {
    title: 'Skype / Microsoft Advertising – Product Manager',
    period: 'Apr 2013 – Oct 2013',
    details: `Provided cross-platform ad solutions and ideation across Microsoft and agency clients globally.`
  },
  {
    title: 'IPC Media (Time Inc) – Digital Product Marketing Manager',
    period: 'Nov 2012 – Mar 2013',
    details: `Ran marketing for trustedreviews.com across mobile/social. Set KPIs, led partnerships, and supported SEO and agile content.`
  },
  {
    title: 'Spring Creative – Technical Project Manager',
    period: 'Jun 2012 – Sep 2012',
    details: `Magento-based eComm builds for luxury brands. Worked hands-on with HTML, ERP integrations, and front-end devs.`
  },
  {
    title: 'adam&eveDDB – Digital Producer',
    period: 'Feb 2012 – Mar 2012',
    details: `Produced green screen Halifax takeover ads, managing external vendors and internal delivery.`
  },
  {
    title: 'Hearst Magazines – Project Manager',
    period: 'Jan 2012 – Feb 2012',
    details: `Produced interactive videos and campaigns for Cosmopolitan and Dorothy Perkins.`
  },
  {
    title: 'Jimmy Choo – Digital Project Manager',
    period: 'Nov 2011',
    details: `Launched US eCommerce site and CMS platform.`
  },
  {
    title: 'Burberry – Digital Project Manager',
    period: 'Jun 2011 – Jul 2011',
    details: `Oversaw responsive redesign for global site with Capgemini and agencies using Agile and Waterfall.`
  },
  {
    title: 'Ogilvy One – Digital Project Manager',
    period: 'Apr 2011 – May 2011',
    details: `Facebook game and intranet UX delivery for Unilever. Managed internal teams and third-party devs.`
  },
  {
    title: 'DDB London – Digital Producer',
    period: 'Jun 2010 – Mar 2011',
    details: `Handled projects for Virgin Media, Tropicana, FT, Johnson & Johnson, and Star Alliance.`
  },
  {
    title: 'Workclub – Senior Producer',
    period: '2010',
    details: `Produced mobile/web builds for Nokia including Nokia Greenroom.`
  },
  {
    title: 'Rehab Studio – Digital Producer',
    period: 'Jul 2009 – Sep 2009',
    details: `Produced campaigns for Toilet Duck (DraftFCB), Faberge, and Toyota.`
  },
  {
    title: 'Hi-ReS! – Digital Producer',
    period: 'Sep 2009 – Apr 2010',
    details: `Projects included Dolce & Gabbana, Jägermeister, The Economist "Thinking Spaces" campaign.`
  },
  {
    title: 'KBS Albion London – Digital Producer',
    period: 'Apr 2008 – Sep 2008',
    details: `Built BT's viral Facebook app (70k users) and brand installations for Accurist, Blackberry, eBay, Skype.`
  },
  {
    title: 'Tangozebra / DoubleClick / Google – Digital Producer',
    period: 'Nov 2007 – Jan 2008',
    details: `Clients: Channel 4, Selftrade, Seiko, Microsoft.`
  },
  {
    title: 'Rapp, MRM, RKCR/Y&R, Razorfish – Producer/PM (Various)',
    period: '2007 – 2009',
    details: `Delivered for clients incl. Legal & General, Pfizer, Visit London, NSPCC, Weight Watchers.`
  },
  {
    title: 'Culture Lab (Dallas, TX) – Creative/Producer',
    period: 'Jan 2007 – Mar 2007',
    details: `Concepted creative and production for Nokia and Scion campaigns.`
  },
  {
    title: 'Uniworld Group (NYC) – Interactive Producer',
    period: 'Oct 2005 – Jan 2007',
    details: `Produced online content for Ford, Burger King, and Obama fundraising campaigns.`
  }
];

export default function CV() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Full CV | Christopher Belgrave</title>
        <meta name="description" content="Full professional CV of Christopher Belgrave, a senior agile product and project manager with global brand experience." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-light to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Home Button */}
          <div className="fixed top-6 left-6 z-20">
            <Link href="/" className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-full shadow-md hover:bg-primary-700 transition-all transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </div>

          {/* Hero Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Christopher Belgrave</h1>
            <p className="text-xl text-gray-600">Senior Digital Project & Product Manager</p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="/cv/christopher-belgrave-cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Download PDF CV
              </a>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Print CV
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`mb-12 sticky top-0 z-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary-600 text-white scale-110'
                      : 'text-gray-600 hover:bg-primary-50 hover:scale-105'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* About Section */}
            <section id="about" className="scroll-mt-16">
              <div className="bg-white rounded-2xl shadow-sm p-8 transform transition-all duration-700 hover:shadow-lg hover:scale-[1.01]">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">About Me</h2>
                <p className="text-gray-700 leading-7 text-lg">
                  With over 18 years of experience working across agencies, enterprises, and independent projects,
                  I've managed global digital workstreams, AI/AR delivery, immersive experiences, and campaign rollouts
                  for Coca-Cola, L'Oréal, Jimmy Choo, Apple, and more.
                </p>
              </div>
            </section>

            {/* Career History */}
            <section id="career" className="scroll-mt-16">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-600">Career History</h2>
                  <button
                    onClick={() => setActiveIndex(activeIndex === null ? 0 : null)}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {activeIndex === null ? 'View Detailed List' : 'View Timeline'}
                  </button>
                </div>

                {activeIndex === null ? (
                  /* Timeline Visualization */
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
                    {careerEntries.map((entry, i) => (
                      <div
                        key={i}
                        className={`relative mb-8 transform transition-all duration-500 hover:scale-105 ${
                          i % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
                        }`}
                        style={{ width: '45%' }}
                      >
                        <div className="absolute top-0 w-4 h-4 bg-primary-600 rounded-full"
                             style={{
                               left: i % 2 === 0 ? '-2px' : 'auto',
                               right: i % 2 === 0 ? 'auto' : '-2px'
                             }}></div>
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">{entry.period}</p>
                          <p className="text-gray-700">{entry.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Accordion View */
                  <div className="space-y-4">
                    {careerEntries.map((entry, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                      >
                        <button
                          onClick={() => toggle(i)}
                          className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors font-medium flex justify-between items-center"
                        >
                          <div>
                            <div className="text-lg font-semibold text-gray-900">{entry.title}</div>
                            <div className="text-sm text-gray-500">{entry.period}</div>
                          </div>
                          <svg
                            className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeIndex === i && (
                          <div className="px-6 py-4 text-gray-700 border-t bg-white transition-all duration-300">
                            {entry.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-16">
              <div className="bg-white rounded-2xl shadow-sm p-8 transform transition-all duration-700 hover:shadow-lg hover:scale-[1.01]">
                <h2 className="text-3xl font-bold text-primary-600 mb-8">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Agile (Scrum, Kanban), Jira, Confluence</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Monday.com, Smartsheet, Trello</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Project Budgeting up to $3.4M</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Cross-functional offshore team management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">HTML5, CSS3, React Native, Unity</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Adobe Creative Suite, Figma</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Google Analytics, Tableau</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Sitecore, WordPress, Salesforce</span>
                      </li>
                      <li className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Generative AI: Firefly, Runway ML</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="scroll-mt-16">
              <div className="bg-white rounded-2xl shadow-sm p-8 transform transition-all duration-700 hover:shadow-lg hover:scale-[1.01]">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">Education & Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                    <p className="text-gray-700">BTEC National Diploma in Media Technology – Leeds City College</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700 transform transition-all duration-300 hover:translate-x-2">Certified Scrum Product Owner – Scrum.org</li>
                      <li className="text-gray-700 transform transition-all duration-300 hover:translate-x-2">Augmented Reality Course – Google (Coursera)</li>
                      <li className="text-gray-700 transform transition-all duration-300 hover:translate-x-2">PADI Advanced Scuba Diver</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Activities */}
            <section id="activities" className="scroll-mt-16">
              <div className="bg-white rounded-2xl shadow-sm p-8 transform transition-all duration-700 hover:shadow-lg hover:scale-[1.01]">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">Activities & Interests</h2>
                <div className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
                  <p className="text-gray-700 leading-7 text-lg">
                    As an MC, I've performed with The Beastie Boys, Roni Size, and Courtney Pine. I'm also a passionate
                    traveler, motorbike rider, diver, gamer, and creative technologist who thrives on blending
                    culture with technology.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}