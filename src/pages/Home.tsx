import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 md:pt-0 px-6 bg-purple-50 dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Hello, I&apos;m
          </h1>

          <h2 className="mt-2 text-5xl font-bold text-purple-600">Navya M K</h2>

          <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-300">
            Frontend Developer • UI/UX Enthusiast • Web Explorer
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I&apos;m a frontend developer who loves crafting clean, intuitive,
            and responsive user interfaces using modern web technologies.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I focus on translating designs into accessible, high-performance web
            experiences, paying close attention to usability, visual
            consistency, and user interaction.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            Always curious and continuously learning, I enjoy improving my
            frontend skills and exploring UI/UX patterns that make products both
            beautiful and functional.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition"
            >
              View Projects →
            </a>

            <a
              href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-purple-600 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Navya M K"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
