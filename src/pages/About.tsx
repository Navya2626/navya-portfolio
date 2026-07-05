export default function About() {
  return (
    <section
      id="about"
      className=" px-6 py-24  dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: About Text */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Frontend Developer with over{" "}
                <span className="font-semibold">3 years of experience</span>,
                specializing in building modern, scalable, and user-focused web
                applications using{" "}
                <span className="font-semibold">ReactJS</span>.
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Experienced in JavaScript, TypeScript, HTML5, CSS3, and modern
                UI frameworks including Tailwind CSS, Material UI, Bootstrap,
                and Ant Design to deliver clean and responsive interfaces.
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Proven impact in optimizing frontend performance by{" "}
                <span className="font-semibold">80%</span> and improving user
                interaction efficiency by{" "}
                <span className="font-semibold">85%</span>, with hands-on
                experience in dashboards, real-time visualizations, and UI/UX
                design.
              </p>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/Navya_MK.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-purple-600 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT: Stats / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-purple-600">3+</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Years of Experience
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-purple-600">6+</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Projects Delivered
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-purple-600">15+</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Web Technologies
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-purple-600">80%</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Performance Optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
