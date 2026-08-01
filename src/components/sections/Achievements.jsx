import React from "react";
import { motion } from "framer-motion";
import {
  BsAwardFill,
  BsCodeSlash,
  BsBriefcaseFill,
  BsPeopleFill,
  BsStars,
} from "react-icons/bs";

const achievements = [
  {
    icon: <BsAwardFill />,
    number: "Top 55",
    title: "DevHouse'25 Finalist",
    description:
      "Selected among 1200+ teams at VIT Chennai for developing an innovative FinTech solution.",
  },
  {
    icon: <BsAwardFill />,
    number: "Top 60",
    title: "Nexus Hackathon",
    description:
      "Built FeedChain, a food donation platform connecting donors with NGOs.",
  },
  {
    icon: <BsBriefcaseFill />,
    number: "3+",
    title: "Internships",
    description:
      "Industry experience in Java, Full Stack Development and Software Engineering.",
  },
  {
    icon: <BsPeopleFill />,
    number: "Lead",
    title: "VisionX",
    description:
      "Leading the technical team while mentoring fellow student developers.",
  },
  {
    icon: <BsCodeSlash />,
    number: "10+",
    title: "Projects",
    description:
      "Developed academic, hackathon and internship projects using modern technologies.",
  },
  {
    icon: <BsStars />,
    number: "2027",
    title: "Graduation",
    description:
      "B.E Computer Science Engineering with strong focus on Software Development.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-28 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

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
            Highlights
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Achievements
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
            Every milestone represents continuous learning,
            leadership, innovation and my passion for building impactful
            software products.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {achievements.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl p-8"
            >

              {/* Hover Line */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5" />

              {/* Icon */}

              <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl bg-blue-500/10 text-4xl text-blue-400 transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                {item.icon}

              </div>

              {/* Number */}

              <h3 className="relative z-10 mt-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent">

                {item.number}

              </h3>

              {/* Title */}

              <h4 className="relative z-10 mt-3 text-2xl font-bold text-white">

                {item.title}

              </h4>

              {/* Description */}

              <p className="relative z-10 mt-5 leading-8 text-zinc-400">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;