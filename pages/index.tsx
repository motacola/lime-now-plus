import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Christopher Belgrave | Digital Project & Product Manager</title>
        <meta name="description" content="Portfolio of Christopher Belgrave, a senior digital project/product manager with experience in AI, AR, and cross-functional team leadership." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} Christopher Belgrave. Built with Next.js, Tailwind & passion for emerging tech.
          </p>
        </div>
      </footer>
    </div>
  );
} 