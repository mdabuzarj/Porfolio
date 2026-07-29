import React from "react";
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
      "Built Avenger-Core, a FinTech solution, and secured a place among the Top 55 finalists out of 1200+ participating teams.",
    icon: <BsTrophyFill />,
  },
  {
    year: "2025",
    title: "Nexus Hackathon Finalist",
    company: "Annai Mira College",
    description:
      "Developed FeedChain, a food donation platform connecting donors with NGOs, and finished among the Top 60 finalists out of 1200+ teams.",
    icon: <BsStars />,
  },
  {
    year: "2025",
    title: "Java Developer Intern",
    company: "Decode Labs",
    description:
      "Worked on Java applications while improving object-oriented programming, problem-solving, and software development practices.",
    icon: <BsBriefcaseFill />,
  },
  {
    year: "Jun – Jul 2026",
    title: "Software Development Engineer Intern",
    company: "Azure Tech Startup",
    description:
      "Contributed to real-world MERN stack applications, backend APIs, and production-ready web solutions.",
    icon: <BsBriefcaseFill />,
  },
  {
    year: "2026 – Present",
    title: "Tech Team Lead",
    company: "VisionX",
    description:
      "Leading the technical team by mentoring members, organizing workshops, and building innovative student-driven projects.",
    icon: <BsStars />,
  },
];

const Journey = () => {
  return (
    <section
      id="experience"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-blue-400 font-semibold">
            My Journey
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Experience & Achievements
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8">
            My journey through internships, hackathons, leadership, and
            continuous learning that shaped me into the developer I am today.
          </p>
        </div>

        <div className="relative border-l border-zinc-700 ml-5">

          {journey.map((item, index) => (
            <div
              key={index}
              className="mb-16 ml-10 relative"
            >

              <div className="absolute -left-[58px] flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                {item.icon}
              </div>

              <span className="text-sm text-blue-400 font-semibold tracking-wide">
                {item.year}
              </span>

              <div className="mt-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 hover:border-blue-500 transition duration-300">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-blue-400 font-medium mt-2">
                  {item.company}
                </p>

                <p className="mt-4 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Journey;