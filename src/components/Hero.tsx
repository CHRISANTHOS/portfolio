export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Cloud & Software Developer
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Building scalable, serverless & AI-powered applications.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 border rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
