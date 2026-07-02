import ProjectCard from "./ProjectCard";

function FocusSection({ darkMode, t }) {
  return (
    <section className="px-10 pb-8 mt-10">
      <div className="px-10 pb-8">
        <p
          className={`text-base uppercase tracking-[0.2em] font-bold mb-4 text-center ${
            darkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          {t.focusSubtitle}
        </p>

        <h2
          className={`text-5xl font-bold tracking-tight mb-10 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {t.focusTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* PROGRAMACIÓN */}
          <ProjectCard
            title={t.dev}
            description={t.descriptionDev}
            icon="code"
            color={
              darkMode
                ? "bg-gradient-to-br from-blue-600/40 to-cyan-500/20"
                : "bg-gradient-to-br from-blue-900 to-cyan-800"
            }
            button={t.projects}
            link="/programming"
            darkMode={darkMode}
          />

          {/* ANÁLISIS DE DATOS */}
          <ProjectCard
            title={t.dataAnalysis}
            description={t.descriptionAnalysis}
            icon="DataAnalysis"
            color={
              darkMode
                ? "bg-gradient-to-br from-purple-600/40 to-pink-500/20"
                : "bg-gradient-to-br from-purple-900 to-fuchsia-800"
            }
            button={t.comingSoon}
            link="/dataAnalisis"
            darkMode={darkMode}
          />

          {/* SERVICENOW */}
          <ProjectCard
            title={t.serviceNow}
            description={t.descriptionServiceNow}
            icon="servicenow"
            color={
              darkMode
                ? "bg-gradient-to-br from-emerald-400/40 to-green-300/20"
                : "bg-gradient-to-br from-emerald-900 to-green-800"
            }
            button={t.comingSoon}
            link="/servicenow"
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
}

export default FocusSection;
