export default function Skills() {
    return (
        <section id="skills" className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        Cloud • Software Engineering • Big Data • Analytics
                    </p>
                </div>

                {/* Main Flex Container */}
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* LEFT COLUMN — FEATURE CARDS */}
                    <div className="flex flex-col gap-6 lg:w-1/2">

                        {/* Card 1 */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Cloud & DevOps Engineering
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Experience designing and deploying scalable solutions on AWS & GCP,
                                applying cloud architecture principles, CI/CD workflows, and
                                reliability-focused deployments.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Big Data & Distributed Systems
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Built batch and real-time data pipelines using Apache Spark,
                                Hadoop, and Cassandra. Focused on performance optimisation,
                                data quality, and scalable analytics workflows.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT COLUMN — SKILL GROUPS */}
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">

                        {/* Skill Group */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                                Cloud & DevOps
                            </h4>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                <li>AWS / GCP / Azure</li>
                                <li>Cloud Architecture</li>
                                <li>CI/CD</li>
                                <li>Cloud Deployment</li>
                            </ul>
                        </div>

                        {/* Skill Group */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                                Programming
                            </h4>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                <li>Python</li>
                                <li>Dart</li>
                                <li>SQL</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        {/* Skill Group */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                                Data Engineering
                            </h4>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                <li>Apache Spark (Batch/Streaming)</li>
                                <li>Hadoop & Cassandra</li>
                                <li>Parallel Programming</li>
                                <li>ETL & Data Quality</li>
                            </ul>
                        </div>

                        {/* Skill Group */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                                Software Engineering
                            </h4>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                <li>Flutter Development</li>
                                <li>Backend Integration</li>
                                <li>Git</li>
                                <li>Agile</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}
