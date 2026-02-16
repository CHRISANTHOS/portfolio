export default function Project() {
    return (
        <section
            id="projects"
            className="w-full bg-white dark:bg-gray-950 py-20 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Selected Projects
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Cloud • Big Data • Analytics • Software Engineering
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* PROJECT 1 */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Generative AI Cloud Application
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Designed and deployed a scalable generative AI solution on AWS,
                            integrating serverless compute, storage, and foundation models.
                            Implemented prompt workflows, API interactions, and performance
                            optimisation strategies.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["AWS", "Lambda", "S3", "Bedrock", "Amplify", "Cognito", "Python"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm text-gray-700 dark:text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Scalable Analytics & Prediction System
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Engineered distributed data processing pipelines for large-scale
                            datasets. Built predictive models, performed feature engineering,
                            and designed dashboards translating complex analytics into
                            actionable insights.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["Apache Spark", "Streamlit", "Python", "SQL", "Analytics"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm text-gray-700 dark:text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Real-Time Data Pipeline
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Designed and implemented a real-time streaming pipeline processing
                            high-volume event data. Focused on latency reduction, data quality
                            monitoring, and reliability optimisation across cloud environments.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["Spark Streaming", "Cassandra", "AWS", "GCP", "Python"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm text-gray-700 dark:text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}