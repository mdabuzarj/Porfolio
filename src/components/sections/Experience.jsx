import React from "react";

const experiences = [
  {
    year: "2025",
    role: "Java Developer Intern",
    company: "Decode Labs",
    description:
      "Worked on Java fundamentals, object-oriented programming, and console-based applications while improving problem-solving skills.",
  },
  {
    year: "2025",
    role: "Web Developer Intern",
    company: "CodeAlpha",
    description:
      "Built responsive web applications using HTML, CSS, JavaScript, React, and integrated frontend with backend APIs.",
  },
  {
    year: "2026",
    role: "Tech Team Lead",
    company: "VisionX",
    description:
      "Leading the technical team, mentoring members, organizing workshops, and developing innovative student-focused projects.",
  },
  {
    year: "2026",
    role: "Hackathon Finalist",
    company: "DevHouse25",
    description:
      "Selected as a finalist among 1200+ participants by developing FeedChain, a platform connecting food donors with NGOs.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#09090B] text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="mb-16 text-center">
          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-zinc-700 ml-4">

          {experiences.map((item, index) => (
            <div key={index} className="mb-12 ml-8">

              <span className="absolute -left-[11px] w-5 h-5 rounded-full bg-blue-500 border-4 border-[#09090B]"></span>

              <p className="text-blue-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.role}
              </h3>

              <h4 className="text-zinc-400 mb-3">
                {item.company}
              </h4>

              <p className="text-zinc-300 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;