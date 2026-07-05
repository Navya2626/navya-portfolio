const experiences = [
  {
    role: "Software Development Engineer – I",
    company: "Nineleaps Technology Solutions Limited",
    location: "Bangalore, KA, IN",
    period: "Aug 2025 – Present",
    points: [
      "Built and maintained a React(Vite)-based migration dashboard for submitting, tracking, and monitoring AI-driven code migration jobs with real-time logs and workflow visibility.",
      "Actively involved in Agile sprint planning, feature design, estimation, and timely delivery.",
      "Focused on performance optimization and UI responsiveness to improve overall user experience.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Ant Design",
      "Redux",
      "Redux-Saga",
      "Agile",
    ],
  },
  {
    role: "Software Developer",
    company: "Alten Global Technology Private Limited",
    location: "Bangalore, KA, IN",
    period: "Oct 2022 – Aug 2025",
    points: [
      "Developed and maintained ReactJS web applications serving 1000+ users daily.",
      "Optimized RESTful APIs, reducing average load time by 30% (3s → 2.1s).",
      "Converted Figma designs into responsive UIs with 99% pixel accuracy.",
      "Implemented Redux and Context API, reducing interaction latency by 25%.",
      "Conducted debugging and optimization, reducing bug reports by 25%.",
      "Deployed applications to secure servers ensuring performance and compliance.",
    ],
    skills: [
      "React",
      "JavaScript",
      "Redux",
      "Context API",
      "REST APIs",
      "Figma",
      "Responsive UI",
      "Bootstrap",
      "material-UI",
      "Charts",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className=" px-6 py-20 bg-purple-50 dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Work Experience
          </h2>
          <div className="mx-auto mt-2 h-1 w-40 bg-purple-600 rounded" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-purple-200 dark:border-purple-800 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-300">
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-gray-200 dark:bg-gray-700" />

              {/* Bullet Points ONLY */}
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 flex-grow">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
