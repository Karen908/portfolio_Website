import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { translations } from "../data/translations";
import Sidebar from "../components/Sidebar";

function Programming({ language, setLanguage, darkMode, setDarkMode }) {
  const t = translations[language];

  const programmingProjects = projects.filter(
    (project) => project.category === "programming",
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-[#bcc5d3] text-[#111827]"
      }`}
    >
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <div className="ml-40 p-20">
        <h1 className="text-5xl font-bold mb-10">{t.programming}</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {programmingProjects.map((project) => (
            <div
  key={project.id}
  className={`
    rounded-3xl p-6 border transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.02]
    ${
      darkMode
        ? `
          bg-white/5
          border-white/10
          shadow-[0_0_30px_rgba(255,255,255,0.04)]
          hover:border-purple-400/40
          hover:shadow-[0_15px_60px_rgba(255,255,255,0.10)]
        `
        : `
          bg-white
          border-gray-200
          shadow-lg
          hover:shadow-2xl
          hover:border-purple-300
        `
    }
  `}
>
              {project.badge && (
                <span className="text-xm font-semibold">{project.badge[language]}</span>
              )}

              <h2 className="text-4xl font-bold mt-3">
                {project.title[language]}
              </h2>

              <p
                className={`mt-3 text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {project.description[language]}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-600 px-3 py-1 rounded-full text-white text-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="inline-block mt-6 text-purple-500 hover:text-purple-400 text-lg font-bold"
              >
                {t.projects}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programming;
