import React from "react";
import SpotlightCard from "../ui/SpotlightCard";
import {
  BsGithub,
  BsArrowUpRight,
} from "react-icons/bs";

const projects = [
  {
    title: "FeedChain",
    description:
      "A MERN-based platform that connects food donors with NGOs to reduce food waste through real-time donation management and tracking.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    tech: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
    github: "https://github.com/mdabuzarj",
    live: "#",
  },
  {
    title: "College Canteen Management",
    description:
      "A full-stack canteen management system with authentication, menu management, role-based access, and online food ordering.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mdabuzarj",
    live: "#",
  },
  {
    title: "Java ATM System",
    description:
      "A console-based banking application implementing object-oriented programming concepts with account management and transaction handling.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tech: ["Java", "OOP"],
    github: "https://github.com/mdabuzarj",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Projects
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
            Some of the projects I've built during internships,
            hackathons, and personal learning.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <SpotlightCard
  key={project.title}
  spotlightColor="rgba(37,99,235,0.35)"
  className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:border-blue-500"
>

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Links */}

                <div className="mt-8 flex items-center justify-between">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition"
                  >
                    <BsGithub />
                    GitHub
                  </a>

                  

                </div>

              </div>

            </SpotlightCard>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;