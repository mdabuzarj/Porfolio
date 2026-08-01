import React from "react";
import { motion } from "framer-motion";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsGeoAltFill,
  BsArrowRight,
} from "react-icons/bs";

const contacts = [
  {
    icon: <BsEnvelopeFill />,
    title: "Email",
    value: "mohammed.abuzar.j54@gmail.com",
    link: "mailto:mohammed.abuzar.j54@gmail.com",
  },
  {
    icon: <BsGithub />,
    title: "GitHub",
    value: "github.com/mdabuzarj",
    link: "https://github.com/mdabuzarj",
  },
  {
    icon: <BsLinkedin />,
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/md-abuzar-1892882a6/",
  },
  {
    icon: <BsGeoAltFill />,
    title: "Location",
    value: "Tamil Nadu, India",
    link: null,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            Whether you have an internship opportunity, collaboration,
            freelance work or simply want to connect, I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 backdrop-blur-xl lg:grid-cols-2"
        >
          {/* Left */}

          <div>

            <h3 className="mb-8 text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">

              {contacts.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                  className="group flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-blue-500"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                    {item.icon}
                  </div>

                  <div>

                    <p className="text-sm text-zinc-500">
                      {item.title}
                    </p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                        className="font-medium text-white transition hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">
                        {item.value}
                      </p>
                    )}

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Right */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-10"
          >

            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              🚀 Available for Internships
            </span>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Open to Opportunities
            </h3>

            <p className="mt-6 leading-8 text-zinc-300">
              I'm actively seeking Software Development Engineer (SDE), Full Stack Developer, and Backend Developer internships and entry-level opportunities where I can contribute, grow, and build impactful products.
            </p>

            <a
              href="mailto:mohammed.abuzar.j54@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)]"
            >
              Let's Connect

              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;