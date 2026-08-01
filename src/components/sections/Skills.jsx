import React from "react";
import { motion } from "framer-motion";
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
      className="relative py-28 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
            My Skills
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Tech Stack
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-400 leading-8">
            Technologies, frameworks and tools I use to build
            scalable, responsive and production-ready applications.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-2 text-blue-300">
            {skills.length}+ Technologies
          </div>

        </motion.div>

        {/* Skills */}

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl p-8"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10" />

              {/* Top Line */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.2,
                }}
                className="relative z-10 text-5xl text-blue-400"
              >
                {skill.icon}
              </motion.div>

              {/* Name */}

              <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white">
                {skill.name}
              </h3>

              {/* Description */}

              <p className="relative z-10 mt-3 text-sm leading-7 text-zinc-400">
                Building modern applications with {skill.name}.
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;