export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Uchenna Akuchie</span>
          </h1>

          <h2 className="text-2xl mb-4">
            Cloud & Software Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I design and build scalable, serverless and data-driven applications 
            by combining Cloud Computing, Software Engineering and Big Data Analytics.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border rounded-lg"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.JPG"
            alt="Profile"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
