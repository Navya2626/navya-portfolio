import spendMap from "../assets/spendmap.jpg";
import easyTime from "../assets/easytime.jpg";
import smartHome from "../assets/smarthome.jpg";
import trieasure from "../assets/trieasure.jpg";
import predictivAnalysis from "../assets/predictiveanalysis.png";
import gemini from "../assets/gemini.jpg";

const projects = [
  {
    title: "Spend Map - Skill Tracker",
    description:
      "Built responsive frontend dashboards for the Spend Map application to track expenses, analyze spending patterns, and visualize data insights with seamless state management.",
    image: spendMap,
    tech: [
      "ReactJS",
      "Tailwind CSS",
      "Redux",
      "Context API",
      "Node.js",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Treiasure AI – Resume Screening & Tool Extraction",
    description:
      "Frontend development of an AI-powered resume screening platform enabling intelligent candidate evaluation, tool extraction, and role-based workflows with secure authentication.",
    image: trieasure,
    tech: [
      "ReactJS",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Context API",
      "Ollama API",
      "Keycloak",
      "GitLab",
      "Figma",
      "Agile (Scrum)",
    ],
  },
  {
    title: "Predictive Analysis – Anomaly Detection System",
    description:
      "Developed interactive frontend dashboards for real-time anomaly detection, data visualization, and analytics using advanced charting libraries.",
    image: predictivAnalysis,
    tech: [
      "ReactJS",
      "JavaScript",
      "Material UI",
      "Context API",
      "Apex Charts",
      "Plotly.js",
      "D3.js",
      "GitLab",
      "Agile (Scrum)",
    ],
  },
  {
    title: "ERP – EasyTime (Timesheet Management Application)",
    description:
      "Built enterprise-grade frontend interfaces for timesheet and attendance management with role-based dashboards, reporting, and analytics features.",
    image: easyTime,
    tech: [
      "ReactJS",
      "JavaScript",
      "Material UI",
      "Context API",
      "Recharts",
      "GitLab",
      "Figma",
      "Agile (Scrum)",
    ],
  },
  {
    title: "GEMINI – Signal & Device Control System",
    description:
      "Implemented frontend interfaces for real-time signal visualization and device control dashboards used in embedded and industrial systems.",
    image: gemini,
    tech: [
      "ReactJS",
      "WebSockets",
      "Charts",
      "Apex Charts",
      "Plotly",
      "REST API",
      "Material UI",
    ],
  },
  {
    title: "IHASS – Smart Home Application System",
    description:
      "Designed and implemented responsive frontend dashboards for smart home automation, enabling real-time device monitoring, control, and secure communication.",
    image: smartHome,
    tech: [
      "ReactJS",
      "JavaScript (ES6+)",
      "Material UI",
      "Bootstrap",
      "MQTT",
      "HTTP / HTTPS",
      "GitLab",
      "Agile (Scrum)",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20  dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            My Projects
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-purple-600 rounded" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="relative p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>

                {/* Fixed-height description */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-gray-200 dark:bg-gray-700" />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Accent Bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
