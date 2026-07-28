import profile from "../../assets/profile.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0B1120] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="text-sm text-zinc-300">
              Available for Opportunities
            </p>
          </div>

          <p className="text-lg text-zinc-400 mb-3">
            Hi, I'm
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
            Mohammed
            <br />
            Abuzar J
          </h1>

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mt-8">
            Building Software
            <br />
            That Solves
            <br />
            Real-World Problems.
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-8 max-w-xl">
            Computer Science student passionate about Java, MERN Stack and
            building modern web applications with clean architecture and
            user-focused experiences.
          </p>

          <div className="mt-10">
            <a
              href="#projects"
              className="inline-block px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold"
            >
              View Projects
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-2xl">
            <a
              href="https://github.com/mdabuzarj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-abuzar-1892882a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mohammed.abuzar.j54@gmail.com"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-[380px] h-[380px] rounded-full border-4 border-blue-500 bg-zinc-900 overflow-hidden shadow-2xl">
            <img
              src={profile}
              alt="Mohammed Abuzar J"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;