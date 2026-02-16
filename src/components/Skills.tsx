export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Cloud */}
          <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">☁️ Cloud Computing</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>AWS (Amplify, Lambda, S3, Cognito)</li>
              <li>Serverless Architectures</li>
              <li>CI/CD & Cloud Deployment</li>
              <li>Cloud Security & IAM</li>
            </ul>
          </div>

          {/* Software */}
          <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">💻 Software Development</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>React / Vite / TypeScript</li>
              <li>Python / FastAPI</li>
              <li>REST APIs</li>
              <li>Flutter Mobile Apps</li>
            </ul>
          </div>

          {/* Big Data */}
          <div className="p-6 rounded-xl shadow bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4">📊 Big Data & Analytics</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Data Analysis & Visualization</li>
              <li>Machine Learning Models</li>
              <li>Python (Pandas, NumPy)</li>
              <li>SQL & Data Processing</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
