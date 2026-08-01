import React from "react";
import { motion } from "framer-motion";
import {
  BsBriefcaseFill,
  BsTrophyFill,
  BsLaptopFill,
  BsStars,
} from "react-icons/bs";

const journey = [
  {
    year: "2023",
    title: "Web Developer Intern",
    company: "CodeAlpha",
    description:
      "Started my development journey by building responsive web applications and strengthening my frontend development skills.",
    icon: <BsLaptopFill />,
  },
  {
    year: "2024",
    title: "DevHouse'25 Finalist",
    company: "VIT Chennai",
    description:
      "Built Avenger-Core, a FinTech solution, securing a place among the Top 55 finalists from 1200+ teams.",
    icon: <BsTrophyFill />,
  },
  {
    year: "2025",
    title: "Nexus Hackathon Finalist",
    company: "Annai Mira College",
    description:
      "Developed FeedChain, a food donation platform connecting donors with NGOs and finished among the Top 60 finalists.",
    icon: <BsStars />,
  },
  {
    year: "2025",
    title: "Java Developer Intern",
    company: "Decode Labs",
    description:
      "Built Java applications while strengthening object-oriented programming and software engineering skills.",
    icon: <BsBriefcaseFill />,
  },
  {
    year: "Jun – Jul 2026",
    title: "Software Development Engineer Intern",
    company: "Azure Tech Startup",
    description:
      "Worked on production-ready MERN applications, backend APIs and scalable software solutions.",
    icon: <BsBriefcaseFill />,
  },
  {
    year: "2026 – Present",
    title: "Tech Team Lead",
    company: "VisionX",
    description:
      "Leading technical initiatives, mentoring members and organizing workshops while building innovative student projects.",
    icon: <BsStars />,
  },
];

const Journey = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-400">
            My Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Experience & Achievements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            Every internship, hackathon and leadership role has contributed
            to my growth as a software developer.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative ml-4 border-l border-blue-500/30">

          {journey.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative mb-16 ml-10"
            >

              {/* Timeline Icon */}

              <div className="absolute -left-[58px] flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600 text-xl text-white shadow-[0_0_25px_rgba(37,99,235,0.45)]">

                {item.icon}

              </div>

              {/* Year */}

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-300">
                {item.year}
              </span>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="group mt-5 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
              >

                {/* Hover Line */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-blue-400">
                  {item.company}
                </p>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Journey;