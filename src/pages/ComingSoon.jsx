import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { translations } from "../data/translations";
import Sidebar from "../components/Sidebar";


function ComingSoon({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
  title,
}) {
  const t = translations[language];

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
        {/* Sidebar */}
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <div
        className={`max-w-xl w-full rounded-3xl p-12 text-center transition-all duration-300
        ${
          darkMode
            ? "bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
            : "bg-white border border-gray-200 shadow-2xl"
        }`}
      >
        {/* Icono */}
        <div className="flex justify-center mb-8 ">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-8xl
            ${
              darkMode
                ? "bg-purple-500/20 text-purple-400"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            <FaTools />
          </div>
        </div>

        {/* Título superior */}
        <p
          className={`uppercase tracking-[0.3em] font-bold mb-3 text-4xl ${
            darkMode ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {t.comingSoonTitle}
        </p>

        {/* Nombre de la sección */}
        <h1
          className={`text-5xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>

        {/* Descripción */}
        <p
          className={`text-2xl leading-relaxed mb-10 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
            {t.comingSoonDescription}
          <br />
        </p>

        {/* Botón */}
        <Link
          to="/"
          className="text-2xl inline-block px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 hover:-translate-y-1 text-white font-semibold"
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;