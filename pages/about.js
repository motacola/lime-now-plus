import Head from 'next/head';
import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Christopher Belgrave</title>
        <meta name="description" content="About Christopher Belgrave - Digital Project & Product Manager with expertise in AI, AR, and digital transformation." />
      </Head>
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-500">
            <p className="mb-6">
              I'm Christopher Belgrave – an Agile-certified Digital Project & Product Manager with over 18 years' experience leading creative and technical teams across the globe. 
              My career spans agency, client-side, and freelance roles, working with top-tier brands including L'Oréal, Coca-Cola, British Airways, Apple, and Jimmy Choo.
            </p>
            <p className="mb-6">
              I specialise in AI workflows, AR/VR experiences, and digital transformation initiatives that scale. Whether it's managing a $3M+ production pipeline or pioneering 
              generative AI adoption in content delivery, I bring together innovation, structure, and a collaborative mindset to make things happen.
            </p>
            <p>
              Beyond the screen, I'm an MC, cyclist, scuba diver, and lifelong creative. I thrive on building human-first digital experiences that engage, inform, and transform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 