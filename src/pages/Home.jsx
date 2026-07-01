import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import FocusSection from "../components/FocusSection";
import SkillsSection from "../components/SkillCategory";
import { translations } from "../data/translations";

function Home({ language, setLanguage, darkMode, setDarkMode }) {
  const t = translations[language];

  return (
    <div
      className={`min-h-screen overflow-hidden relative transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#0B0B0B] via-[#111827] to-[#0B0B0B]"
          : "bg-gradient-to-b from-slate-50 via-[#F1F5F9] to-[#E9EEF5]"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {/* Main Content */}
      <div
        className=" relative z-10 w-full lg:ml-52 lg:w-[calc(100%-13rem)]"
      >
        <HeroSection darkMode={darkMode} t={t} language={language} />

        <FocusSection darkMode={darkMode} t={t} />

        <SkillsSection darkMode={darkMode} t={t} />
      </div>
    </div>
  );
}

export default Home;
