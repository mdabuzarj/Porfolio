import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", icon: <SiReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Tech Stack
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8">
            Technologies and tools I use to design, build,
            and deploy modern web applications.
          </p>

        </div>

        {/* Skills */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-2"
            >

              <div className="text-5xl text-blue-500 mb-5 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;