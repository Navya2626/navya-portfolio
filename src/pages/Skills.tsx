import { useEffect, useRef, useState } from "react";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  Squares2X2Icon,
  CloudIcon,
  PencilSquareIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    items: "ReactJS, HTML5, CSS3, JavaScript (ES6+), TypeScript",
    level: 90,
  },
  {
    title: "Styling & UI Libraries",
    icon: PaintBrushIcon,
    items: "Bootstrap, Material UI, Tailwind CSS, Ant Design",
    level: 85,
  },
  {
    title: "State Management",
    icon: Squares2X2Icon,
    items: "Redux, Redux-Saga, Context API, React Hooks",
    level: 85,
  },
  {
    title: "Version Control & Platforms",
    icon: CloudIcon,
    items: "Git, GitHub, GitLab, Postman, Vercel",
    level: 80,
  },
  {
    title: "Design Tools",
    icon: PencilSquareIcon,
    items: "Adobe XD, Figma",
    level: 85,
  },
  {
    title: "Chart Libraries",
    icon: ChartBarIcon,
    items: "Plotly.js, Apex Charts, D3.js",
    level: 70,
  },
  {
    title: "Tools & Methodologies",
    icon: WrenchScrewdriverIcon,
    items: "VS Code, Agile (Scrum, Sprint Planning, Retrospectives)",
    level: 85,
  },
  {
    title: "Backend Development",
    icon: CodeBracketIcon,
    items: "Node.js, Express.js, REST APIs, MySQL, MongoDB",
    level: 60,
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen px-6 py-28 bg-purple-50 dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Skills
          </h2>
          <div className="mt-2 h-1 w-16 bg-purple-600 rounded" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40">
                  <skill.icon className="h-6 w-6 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.items}
                  </p>
                </div>
              </div>

              {/* Proficiency */}
              <div className="mt-6">
                <div className="flex justify-between mb-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  <span className="text-purple-600 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-purple-100 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-purple-600 transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
