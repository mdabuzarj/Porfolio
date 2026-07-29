import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FeedChain",
    description:
      "A food donation platform connecting donors with NGOs using MERN, FastAPI, and Supabase.",
    tech: ["React", "Node.js", "FastAPI", "Supabase", "MongoDB"],
    github: "https://github.com/yourusername/feedchain",
    live: "#",
  },
  {
    title: "College Canteen Management",
    description:
      "Online food ordering system with authentication, menu management, and order tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/canteen",
    live: "#",
  },
  {
    title: "ATM Interface",
    description:
      "Java console application simulating ATM operations using object-oriented programming.",
    tech: ["Java"],
    github: "https://github.com/yourusername/atm",
    live: "#",
  },
  {
    title: "Student Grade Calculator",
    description:
      "Java application to calculate grades and display student performance.",
    tech: ["Java"],
    github: "https://github.com/yourusername/grade-calculator",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#09090B] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-500 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;