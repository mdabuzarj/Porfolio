import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import profile from "../../assets/profile.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#020617] flex items-center overflow-hidden pt-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          {/* Badge */}

          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300"
          >
            🚀 Available for Software Development Internships
          </motion.div>

          {/* Heading */}

          <motion.h1
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Building
            <span className="text-blue-500"> scalable </span>
            web applications
            <br />
            for real-world impact.
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-xl font-medium text-blue-400"
          >
            React • Java • MERN • Cloud
          </motion.p>

          {/* Description */}

          <motion.p
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl leading-8 text-zinc-400"
          >
            I'm Mohammed Abuzar J, a Computer Science Engineering student
            passionate about developing modern web applications, scalable
            backend systems, and solving real-world problems through
            technology. I enjoy building clean user experiences while
            continuously learning new technologies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
            >
              View Projects
              <BsArrowRight />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 bg-zinc-900/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Contact Me
            </a>
          </motion.div>

                    {/* Stats */}

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-14 flex flex-wrap gap-12"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <h2 className="text-4xl font-bold text-white">3+</h2>
              <p className="mt-2 text-zinc-400">
                Internships
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <h2 className="text-4xl font-bold text-white">2</h2>
              <p className="mt-2 text-zinc-400">
                Hackathon Finalist
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <h2 className="text-4xl font-bold text-white">2027</h2>
              <p className="mt-2 text-zinc-400">
                Graduation
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-[170px]" />

          {/* Floating Image */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src={profile}
              alt="Mohammed Abuzar J"
              cclassName="relative z-10 w-[420px] rounded-3xl border border-zinc-800 shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-zinc-600">
          <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;