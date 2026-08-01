import React from "react";
import { motion } from "framer-motion";
import {
  BsCheckCircleFill,
  BsCodeSlash,
  BsLaptop,
  BsAward,
  BsRocketTakeoff,
  BsMortarboard,
} from "react-icons/bs";

const focusAreas = [
  "Spring Boot",
  "System Design",
  "Cloud Deployment",
  "REST APIs",
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-28 bg-[#020617]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Get To Know Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-400 leading-8">
            A passionate Computer Science Engineering student focused on
            developing scalable applications, solving real-world problems,
            and continuously learning modern technologies.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-4xl font-bold text-white leading-tight">
              Passionate about building
              <span className="text-blue-500"> impactful software.</span>
            </h3>

            <p className="mt-8 leading-8 text-zinc-400">
              I'm Mohammed Abuzar J, a Computer Science Engineering student
              passionate about creating scalable web applications,
              efficient backend systems, and meaningful digital products.
              I enjoy learning new technologies and applying them to solve
              practical problems.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              Through internships, hackathons, and leadership roles, I've
              strengthened my technical knowledge, communication skills,
              and ability to work effectively in collaborative teams.
            </p>

            <blockquote className="mt-10 border-l-4 border-blue-500 pl-6 italic text-blue-300 text-lg">
              "I don't just write code. I build solutions that create impact."
            </blockquote>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            {/* Quick Facts */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-md">

              <h3 className="text-2xl font-bold text-white mb-8">
                Quick Facts
              </h3>

              <div className="grid grid-cols-2 gap-6">

                <div className="flex items-center gap-3">
                  <BsLaptop className="text-blue-400 text-2xl" />
                  <span className="text-zinc-300">
                    Full Stack Developer
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BsMortarboard className="text-blue-400 text-2xl" />
                  <span className="text-zinc-300">
                    B.E CSE (2027)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BsRocketTakeoff className="text-blue-400 text-2xl" />
                  <span className="text-zinc-300">
                    3+ Internships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BsAward className="text-blue-400 text-2xl" />
                  <span className="text-zinc-300">
                    Hackathon Finalist
                  </span>
                </div>

              </div>

            </div>

            {/* Current Focus */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-md">

              <h3 className="text-2xl font-bold text-white mb-8">
                Currently Exploring
              </h3>

              <div className="space-y-5">

                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <BsCheckCircleFill className="text-blue-500 text-xl" />

                    <span className="text-zinc-300">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default About;