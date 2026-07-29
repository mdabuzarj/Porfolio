import React from "react";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsGeoAltFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Work Together
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-zinc-400 leading-8">
            Whether you have an internship opportunity, a project idea, or just
            want to connect, I'm always open to meaningful conversations.
          </p>

        </div>

        {/* Contact Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-10">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left */}
            <div>

              <h3 className="text-3xl font-bold text-white mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <BsEnvelopeFill className="text-blue-400 text-2xl" />
                  <a
                    href="mailto:mohammed.abuzar.j54@gmail.com"
                    className="text-zinc-300 hover:text-blue-400 transition"
                  >
                    mohammed.abuzar.j54@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <BsGithub className="text-blue-400 text-2xl" />
                  <a
                    href="https://github.com/mdabuzarj"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-blue-400 transition"
                  >
                    github.com/mdabuzarj
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <BsLinkedin className="text-blue-400 text-2xl" />
                  <a
                    href="https://www.linkedin.com/in/md-abuzar-1892882a6/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-blue-400 transition"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <BsGeoAltFill className="text-blue-400 text-2xl" />
                  <span className="text-zinc-300">
                    Tamil Nadu, India
                  </span>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-8">

                <h4 className="text-2xl font-semibold text-white mb-4">
                  Open to Opportunities 🚀
                </h4>

                <p className="text-zinc-300 leading-8">
                  I'm currently seeking Software Development Internship and
                  Full Stack Developer opportunities where I can contribute,
                  grow, and work on impactful products.
                </p>

                <a
                  href="mailto:mohammed.abuzar.j54@gmail.com"
                  className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
                >
                  Say Hello
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;