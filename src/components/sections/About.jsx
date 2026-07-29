import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#09090B] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Who I am and what I build.
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-zinc-300 leading-8 mb-6">
              I'm Mohammed Abuzar J, a Full Stack Developer passionate about
              creating scalable and user-friendly web applications using modern
              technologies like React, Node.js, Java, and SQL.
            </p>

            <p className="text-zinc-300 leading-8 mb-6">
              I enjoy solving real-world problems through technology and
              continuously improving my development skills by building projects,
              participating in hackathons, and learning new tools.
            </p>

            <p className="text-zinc-300 leading-8">
              My goal is to become a Software Development Engineer and build
              products that positively impact people's lives.
            </p>
          </div>

          {/* Right */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

            <div className="flex justify-between border-b border-zinc-700 py-4">
              <span className="text-zinc-400">Name</span>
              <span>Mohammed Abuzar J</span>
            </div>

            <div className="flex justify-between border-b border-zinc-700 py-4">
              <span className="text-zinc-400">Education</span>
              <span>B.E CSE</span>
            </div>

            <div className="flex justify-between border-b border-zinc-700 py-4">
              <span className="text-zinc-400">CGPA</span>
              <span>8.3</span>
            </div>

            <div className="flex justify-between border-b border-zinc-700 py-4">
              <span className="text-zinc-400">Location</span>
              <span>Tamil Nadu, India</span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-zinc-400">Graduation</span>
              <span>2027</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;