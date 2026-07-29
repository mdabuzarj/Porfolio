import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Database",
    tech: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "Tools",
    tech: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#09090B] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">

                {category.tech.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 bg-zinc-800 rounded-xl p-4 hover:bg-zinc-700 transition"
                  >
                    <div className="text-3xl text-blue-500">
                      {item.icon}
                    </div>

                    <span>{item.name}</span>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;