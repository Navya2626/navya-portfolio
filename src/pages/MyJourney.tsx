import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const journeyData = [
  {
    type: "work",
    date: "Aug 2025 – Present",
    title: "Software Development Engineer – I",
    org: "Nineleaps Technology Solutions Limited",
    description:
      "Working as a Software Development Engineer, contributing to the design and development of scalable web applications, collaborating with cross-functional teams, and delivering high-quality frontend solutions using modern technologies.",
  },
  {
    type: "work",
    date: "Oct 2022 – Aug 2025",
    title: "Software Developer",
    org: "Alten Global Technology Private Limited",
    description:
      "Worked on building and maintaining scalable web applications, improving performance, and implementing modern UI/UX solutions while following Agile methodologies and best engineering practices.",
  },
  {
    type: "education",
    date: "Jul 2018 – Jul 2022",
    title:
      "Bachelor of Engineering in Electronics and Communication Engineering",
    org: "New Horizon College of Engineering, Bengaluru",
    description:
      "Graduated with a GPA of 9.59. Developed strong foundations in engineering principles, programming, data structures, and problem-solving, which later translated into a passion for software and frontend development.",
  },
];

export default function MyJourney() {
  return (
    <section
      id="my-journey"
      className="min-h-screen px-4 sm:px-6 py-28 bg-purple-50 dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            My Journey
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 rounded" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 h-full w-px bg-purple-300 dark:bg-purple-700" />

          <div className="space-y-6">
            {journeyData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-300">
                  {item.type === "work" ? (
                    <BriefcaseIcon className="h-5 w-5 text-purple-600" />
                  ) : (
                    <AcademicCapIcon className="h-5 w-5 text-purple-600" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 w-full">
                  <span className="inline-block mb-2 rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1 text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                    {item.date}
                  </span>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-medium text-purple-600 text-sm sm:text-base">
                    {item.org}
                  </p>

                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
