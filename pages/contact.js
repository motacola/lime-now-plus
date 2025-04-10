import Head from 'next/head';
import Header from '../components/Header';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Christopher Belgrave</title>
        <meta name="description" content="Contact Christopher Belgrave - Digital Project & Product Manager. Available for freelance, consulting, or permanent opportunities." />
      </Head>
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Let's Connect
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              I'm open to freelance, consulting, or permanent opportunities in digital production, immersive experiences, or creative technology.
              Let's build something extraordinary together.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-white shadow-md p-6 rounded-lg border border-gray-100">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:chrisbelgrave@gmail.com" className="text-blue-600 hover:underline">
                      chrisbelgrave@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+447912360075" className="text-blue-600 hover:underline">
                      +44 79 123 600 75
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Location:</strong> London, UK (Remote-Friendly)
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                      href="https://www.linkedin.com/in/chrisbelgrave/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      linkedin.com/in/chrisbelgrave
                    </a>
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="/cv/christopher-belgrave-cv.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 