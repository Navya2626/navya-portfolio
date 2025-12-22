import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiAntdesign,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiVercel,
  SiFigma,
  SiAdobexd,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function TechnicalSkills() {
  return (
    <section
      id="technical-skills"
      className=" px-6 py-32
                 text-gray-900
                 dark:text-white
                 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <div className="mt-2 h-1 w-40 bg-purple-600 mx-auto rounded" />
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          <SkillIcon icon={SiJavascript} label="JavaScript" color="#F7DF1E" />
          <SkillIcon icon={SiTypescript} label="TypeScript" color="#3178C6" />
          <SkillIcon icon={SiReact} label="React" color="#61DAFB" />
          <SkillIcon icon={SiNodedotjs} label="Node.js" color="#339933" />
          <SkillIcon icon={SiHtml5} label="HTML5" color="#E34F26" />
          <SkillIcon icon={SiCss3} label="CSS3" color="#1572B6" />
          <SkillIcon icon={SiRedux} label="Redux" color="#764ABC" />
          <SkillIcon
            icon={SiTailwindcss}
            label="Tailwind CSS"
            color="#38BDF8"
          />
          <SkillIcon icon={SiBootstrap} label="Bootstrap" color="#7952B3" />
          <SkillIcon icon={SiMui} label="Material UI" color="#007FFF" />
          <SkillIcon icon={SiAntdesign} label="Ant Design" color="#0170FE" />
          <SkillIcon icon={SiMongodb} label="MongoDB" color="#47A248" />
          <SkillIcon icon={SiMysql} label="MySQL" color="#4479A1" />
          <SkillIcon icon={SiGit} label="Git" color="#F05032" />
          <SkillIcon icon={SiGithub} label="GitHub" color="#000000" />
          <SkillIcon icon={SiGitlab} label="GitLab" color="#FC6D26" />
          <SkillIcon icon={SiPostman} label="Postman" color="#FF6C37" />
          <SkillIcon icon={SiVercel} label="Vercel" color="#dddddd" />
          <SkillIcon icon={SiFigma} label="Figma" color="#F24E1E" />
          <SkillIcon icon={SiAdobexd} label="Adobe XD" color="#FF61F6" />
        </div>
      </div>
    </section>
  );
}

type SkillIconProps = {
  icon: React.ElementType;
  label: string;
  color: string;
};

function SkillIcon({ icon: Icon, label, color }: SkillIconProps) {
  return (
    <div className="group flex flex-col items-center gap-3">
      <div
        className="
          flex h-16 w-16 items-center justify-center rounded-xl
          bg-white 
          shadow-sm
          transition-transform duration-300
          group-hover:scale-110
        "
        style={{ boxShadow: `0 0 20px ${color}40` }}
      >
        <Icon size={36} color={color} />
      </div>

      <span
        className="
        text-sm text-gray-600
        dark:text-gray-400
        group-hover:text-purple-600
        dark:group-hover:text-white
        transition
      "
      >
        {label}
      </span>
    </div>
  );
}
