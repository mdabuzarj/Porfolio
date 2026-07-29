import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const focusAreas = [
  "Full Stack Development",
  "Java Backend Development",
  "Cloud Computing",
  "System Design",
  "Problem Solving",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Get to know me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            About Me
          </h2>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate about building impactful software.
            </h3>

            <p className="text-zinc-400 leading-8 mb-6">
              I'm Mohammed Abuzar J, a Final-year Computer Science Engineering
              student passionate about creating modern web applications and
              scalable backend systems. I enjoy solving real-world problems
              through technology while continuously improving my development
              skills.
            </p>

            <p className="text-zinc-400 leading-8 mb-6">
              Throughout my journey, I've completed internships, participated in
              national-level hackathons, and led technical initiatives that have
              strengthened both my technical and teamwork skills.
            </p>

            <p className="text-zinc-400 leading-8">
              My goal is to become a Software Development Engineer who builds
              reliable, scalable, and user-friendly products that make a real
              difference.
            </p>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8">

            <h3 className="text-2xl font-semibold text-white mb-8">
              Current Focus
            </h3>

            <div className="space-y-6">

              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <BsCheckCircleFill className="text-blue-500 text-xl" />

                  <p className="text-zinc-300 text-lg">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

              <p className="text-blue-300 leading-7">
                🚀 Currently looking for Software Development Internship
                opportunities where I can learn, contribute, and build impactful
                products.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;