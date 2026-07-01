import { FaGithub, FaLinkedin, FaDownload, FaLanguage } from "react-icons/fa";

import { motion } from "framer-motion";
import certificate from "../assets/ingles.pdf";
import cvEN from "../assets/curriculumEnglish.pdf";
import cvES from "../assets/currículumSpanish.pdf";
import profilePicture from "../assets/profilePicture.png";

function HeroSection({ t, darkMode, language }) {
  const cvFile = language === "EN" ? cvEN : cvES;

  return (
    <section>
      <div
        className={`relative overflow-hidden min-h-screen px-12 py-16 flex flex-col lg:flex-row items-center justify-center gap-20 ${
          darkMode
            ? "bg-gradient-to-br from-black via-[#0f0f13] to-[#121212]"
            : "bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200"
        }`}
      >
        {" "}
        {/* Glow Background */}
        <div
          className={`absolute w-[550px] h-[550px] rounded-full top-[-180px] right-[-180px] blur-[150px] pointer-events-none ${
            darkMode ? "bg-purple-600/20" : "bg-purple-500/20"
          }`}
        />
        <div
          className={`absolute w-[420px] h-[420px] rounded-full bottom-[-150px] left-[-120px] blur-[140px] pointer-events-none ${
            darkMode ? "bg-cyan-500/10" : "bg-sky-400/20"
          }`}
        />
        {/* LEFT */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p
            className={`mb-8 tracking-[0.25em] uppercase font-bold text-lg ${
              darkMode ? "text-purple-400" : "text-purple-700"
            }`}
          >
            {t.role}
          </p>

          <h1
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
          >
            {t.title}
            <br />

            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-700 bg-clip-text text-transparent">
              KAREN DANIELA PEREZ
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl leading-relaxed text-lg font-medium ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            {t.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karenperezp"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold px-5 h-12 rounded-xl border flex items-center gap-3 transition duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white border-white/10 hover:bg-purple-500"
                  : " bg-whiteborder-slate-200text-slate-700 hover:shadow-xl border-[#8b95a5] hover:bg-purple-600 hover:text-white shadow-lg"
              }`}
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Karen908?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold px-5 h-12 rounded-xl border flex items-center gap-3 transition duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white border-white/10 hover:bg-purple-500"
                  : "bg-whiteborder-slate-200text-slate-700 hover:shadow-xl border-[#8b95a5] hover:bg-purple-600 hover:text-white shadow-lg"
              }`}
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            {/* Certificate */}
            <a
              href={certificate}
              download
              className={`font-bold px-5 h-12 rounded-xl border flex items-center gap-3 transition duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white border-white/10 hover:bg-purple-500"
                  : "bg-whiteborder-slate-200text-slate-700 hover:shadow-xl border-[#8b95a5] hover:bg-purple-600 hover:text-white shadow-lg"
              }`}
            >
              <FaLanguage size={16} />
              <span>{t.certificate}</span>
            </a>

            {/* CV */}
            <a
              href={cvFile}
              download={
                language === "EN"
                  ? "Karen_Daniela_Perez_Resume.pdf"
                  : "Karen_Daniela_Perez_CV.pdf"
              }
              className="px-6 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-purple-500/30 hover:bg-purple-600 hover:-translate-y-1 transition duration-300 font-semibold flex items-center gap-3 text-white shadow-xl"
            >
              <FaDownload size={16} />
              <span>{t.cv}</span>
            </a>
          </div>
        </motion.div>
        {/* RIGHT */}
        <div className="hidden md:flex justify-center relative">
          <div
            className={`absolute w-[380px] h-[380px] rounded-full blur-3xl ${
              darkMode ? "bg-purple-500/15" : "bg-purple-400/20"
            }`}
          />

          <div
            className={`relative w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] rounded-full p-[3px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 shadow-[0_20px_80px_rgba(168,85,247,0.35)]`}
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden ${
                darkMode ? "bg-neutral-900" : "bg-white"
              }`}
            >
              <img
                src={profilePicture}
                alt="Karen Daniela Perez"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
