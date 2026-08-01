import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../ui/SpotlightCard";
import {
  BsGithub,
  BsArrowUpRight,
  BsStars,
} from "react-icons/bs";

const projects = [
  {
    title: "FeedChain",
    description:
      "A MERN-based food donation platform connecting restaurants, donors and NGOs with real-time tracking and secure authentication.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    tech: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
    github: "https://github.com/mdabuzarj/FeedChain",
    live: "#",
    featured: true,
  },
  {
    title: "College Canteen Management",
    description:
      "Full-stack web application for digital food ordering, menu management, authentication and role-based access.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/mdabuzarj",
    live: "#",
    featured: false,
  },
  {
    title: "Java ATM System",
    description:
      "Console-based banking application demonstrating Object-Oriented Programming, transactions and account management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    tech: ["Java", "OOP"],
    github: "https://github.com/mdabuzarj",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
            Featured Work
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            Projects built during internships, hackathons and personal
            learning that demonstrate my passion for software development.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
            >

              <SpotlightCard
                spotlightColor="rgba(37,99,235,.35)"
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {project.featured && (
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white shadow-lg">
                      <BsStars />
                      Featured
                    </div>
                  )}

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-white transition hover:border-blue-500 hover:bg-blue-500/10"
                    >
                      <BsGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                    >
                      Live Demo
                      <BsArrowUpRight />
                    </a>

                  </div>

                </div>

              </SpotlightCard>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;