import emailjs from "@emailjs/browser";

export default function Contact() {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yahqma",
        "template_98wo258",
        e.currentTarget,
        "QxNv0aK0haCBu2KYK"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          e.currentTarget.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };
    
    return (
        <section
            id="contact"
            className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6"
        >
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Contact Me
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Interested in working together or discussing opportunities?
                        Feel free to reach out.
                    </p>
                </div>

                <div className="text-center mb-8">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                        📩 Or email me directly at
                        <a
                            href="mailto:ucheakuchie@outlook.com"
                            className="text-gray-900 dark:text-white font-medium underline hover:opacity-70"
                        >
                            ucheakuchie@outlook.com
                        </a>
                    </p>
                </div>


                {/* Contact Card */}
                <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-md p-8">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder="Write your message..."
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-3 rounded-lg 
                     hover:bg-black transition
                     dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>

    )
}