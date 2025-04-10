import Head from 'next/head';
import Header from '../components/Header';

const projects = [
  {
    title: "AR Beauty Experience for Maybelline",
    tech: "WebAR, 3D Modeling, Threedium",
    description: "Led AR production and AI workflow setup for a L'Oréal-backed immersive beauty experience using WebAR and 3D technology.",
  },
  {
    title: "Global Campaign Delivery – Coca-Cola",
    tech: "WPP Agencies, Agile, Jira",
    description: "Managed end-to-end creative rollout for Sprite, Jack & Coke, and Topo Chico. Integrated across AKQA, Ogilvy, Wunderman, and others.",
  },
  {
    title: "Cross-Platform Music App – ROLI / PlayLUMI",
    tech: "React Native, Unity, C++",
    description: "Scrum-managed agile teams to deliver a musical app for ROLI's smart keyboard product. Coordinated with design, QA and API teams.",
  },
  {
    title: "Game Trailers – A Quiet Place & Rune Factory 5",
    tech: "ClickUp, Unreal, Maya",
    description: "Project managed trailer production from VO to post for AAA titles. Oversaw budgets, creative workflows, and dev delivery.",
  },
  {
    title: "Luxury eCommerce – Jimmy Choo",
    tech: "Custom CMS, eComm",
    description: "Delivered full website design and build for Jimmy Choo's US retail platform. Focused on UX, stakeholder engagement, and launch management.",
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Christopher Belgrave</title>
        <meta name="description" content="Featured projects by Christopher Belgrave - Digital Project & Product Manager specializing in AI, AR, and digital transformation." />
      </Head>
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg border border-gray-100 transition hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-blue-500 mb-2">{project.tech}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 