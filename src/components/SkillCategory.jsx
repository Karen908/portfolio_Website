import {
  FaJava,
  FaReact,
  FaTable,
  FaTasks,
  FaClipboardList,
  FaCogs,
  FaChartBar,
} from "react-icons/fa";

import { SiIonic, SiMysql, SiSpring } from "react-icons/si";

function SkillsSection({ darkMode, t }) {
  return (
    <section className="px-20 pb-20">
      {/* TITLE */}

      <p
        className={`text-base uppercase tracking-[0.2em] font-bold mb-4 text-center ${
          darkMode ? "text-purple-400" : "text-purple-700"
        }`}
      >
        {t.skillsSubtitle}
      </p>

      <h2
        className={`text-5xl font-bold mb-10 text-center ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {t.skillsTitle}
      </h2>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* PROGRAMACIÓN */}
        <div
          className={`
            rounded-3xl p-8 border backdrop-blur-md
            transition duration-300 hover:-translate-y-2 hover:scale-[1.02]
            ${
              darkMode
                ? "bg-gradient-to-br from-blue-600/40 to-cyan-500/20 border-white/10 text-white"
                : "bg-blue-900/90 border-blue-800/40 text-gray-100"
            }
          `}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">{t.dev}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
            {[
              {
                name: "Java",
                icon: <FaJava />,
                dark: "text-orange-400",
                light: "text-[#F89820]",
              },
              {
                name: "React",
                icon: <FaReact />,
                dark: "text-cyan-300",
                light: "text-[#61DAFB]",
              },
              {
                name: "Spring Boot",
                icon: <SiSpring />,
                dark: "text-green-300",
                light: "text-[#6DB33F]",
              },
              {
                name: "Ionic",
                icon: <SiIonic />,
                dark: "text-blue-300",
                light: "text-[#3880FF]",
              },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className={`text-5xl ${darkMode ? skill.dark : skill.light}`}
                >
                  {skill.icon}
                </div>

                <p
                  className={`text-lg font-medium text-center ${
                    darkMode ? "text-white" : "text-gray-100"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ANÁLISIS DE DATOS */}
        <div
          className={`
            rounded-3xl p-8 border backdrop-blur-md
            transition duration-300 hover:-translate-y-2 hover:scale-[1.02]
            ${
              darkMode
                ? "bg-gradient-to-br from-purple-600/40 to-pink-500/20 border-white/10 text-white"
                : "bg-purple-900/90 border-purple-800/40 text-gray-100"
            }
          `}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            {t.dataAnalysis}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "MySQL",
                icon: <SiMysql />,
                dark: "text-sky-300",
                light: "text-sky-400",
              },
              {
                name: "Power BI",
                icon: <FaChartBar />,
                dark: "text-yellow-300",
                light: "text-[#F2C811]",
              },
              {
                name: "Excel",
                icon: <FaTable />,
                dark: "text-green-300",
                light: "text-green-400",
              },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className={`text-5xl ${darkMode ? skill.dark : skill.light}`}
                >
                  {skill.icon}
                </div>

                <p
                  className={`text-lg font-medium text-center ${
                    darkMode ? "text-white" : "text-gray-100"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICENOW */}
        <div
          className={`
            rounded-3xl p-8 border backdrop-blur-md
            transition duration-300 hover:-translate-y-2 hover:scale-[1.02]
            ${
              darkMode
                ? "bg-gradient-to-br from-emerald-400/40 to-green-300/20 border-white/10 text-white"
                : "bg-emerald-900/90 border-emerald-800/40 text-gray-100"
            }
          `}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">ServiceNow</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Workflows",
                icon: <FaTasks />,
                dark: "text-gray-200",
                light: "text-slate-100",
              },
              {
                name: "Catalogs",
                icon: <FaClipboardList />,
                dark: "text-sky-300",
                light: "text-sky-400",
              },
              {
                name: "Scripting",
                icon: <FaCogs />,
                dark: "text-amber-300",
                light: "text-amber-300",
              },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className={`text-5xl ${darkMode ? skill.dark : skill.light}`}
                >
                  {skill.icon}
                </div>

                <p
                  className={`text-lg font-medium text-center ${
                    darkMode ? "text-white" : "text-gray-100"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
