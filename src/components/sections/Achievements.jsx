
import React from "react";
import {
  BsAwardFill,
  BsCodeSlash,
  BsBriefcaseFill,
  BsPeopleFill,
} from "react-icons/bs";

const achievements = [
  {
    icon: <BsAwardFill />,
    number: "Top 55",
    title: "DevHouse'25 Finalist",
    description: "Selected among 1200+ teams at VIT Chennai.",
  },
  {
    icon: <BsAwardFill />,
    number: "Top 60",
    title: "Nexus Hackathon",
    description: "Finalist with FeedChain food donation platform.",
  },
  {
    icon: <BsBriefcaseFill />,
    number: "3+",
    title: "Internships",
    description: "Hands-on industry experience in Java and Full Stack Development.",
  },
  {
    icon: <BsPeopleFill />,
    number: "Lead",
    title: "VisionX",
    description: "Leading the technical team and mentoring student developers.",
  },
  {
    icon: <BsCodeSlash />,
    number: "10+",
    title: "Projects",
    description: "Academic, internship, and personal software projects.",
  },
  {
    icon: <BsAwardFill />,
    number: "2027",
    title: "Graduating",
    description: "B.E. Computer Science & Engineering.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Highlights
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Achievements
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
            Milestones that reflect my learning journey, technical growth,
            leadership, and passion for software development.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400">
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {item.number}
              </h3>

              <h4 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;