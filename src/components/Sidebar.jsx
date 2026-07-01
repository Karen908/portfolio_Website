  import {
    FaHome,
    FaGlobe,
    FaCode,
    FaChartLine,
    FaCloud,
    FaBars,
    FaTimes,
  } from "react-icons/fa";

  import { useState } from "react";
  import { Link, NavLink } from "react-router-dom";

  function Sidebar({
    darkMode = true,
    setDarkMode,
    language = "EN",
    setLanguage,
    t = { language: "Language" },
  }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItem = ({ isActive }) =>
      `group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
        isActive
          ? darkMode
            ? "bg-purple-500/15 border-purple-500/40 text-purple-400 shadow-lg shadow-purple-500/10"
            : "bg-purple-100 border-purple-200 text-purple-700 shadow"
          : darkMode
          ? "border-transparent text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 hover:translate-x-1"
          : "border-transparent text-slate-600 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100 hover:translate-x-1"
      }`;

      const MobileButton = (
    <button
  onClick={() => setMenuOpen(true)}
  className={`lg:hidden fixed top-5 left-5 z-[100] w-12 h-12 rounded-xl flex items-center justify-center
  transition-all duration-300 shadow-xl hover:scale-105 active:scale-95
  ${
    darkMode
      ? "bg-[#111827]/90 backdrop-blur-md border border-purple-500/20 text-white hover:bg-purple-600"
      : "bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white"
  }`}
>
  <FaBars size={18} />
</button>
  );

  return (
  <>
    {/* Botón hamburguesa */}
    {MobileButton}

    {/* Fondo oscuro cuando el menú está abierto */}
    {menuOpen && (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        onClick={() => setMenuOpen(false)}
      />
    )}

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-screen w-64 lg:w-52 border-r flex flex-col justify-between py-8 transition-transform duration-300 z-50
      ${
        menuOpen
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"
      }
      ${
        darkMode
          ? "bg-black border-gray-800"
          : "bg-[#F8FAFC] border-slate-200 shadow-xl"
      }`}
    >
      {/* Botón cerrar */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden absolute top-5 right-5 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          darkMode
            ? "text-white hover:bg-purple-500/20"
            : "text-slate-700 hover:bg-purple-100"
        }`}
      >
        <FaTimes size={18} />
      </button>

      {/* TOP */}
      
      <div className="flex flex-col">
        {/* LOGO */}
        <Link
          to="/"
          className="w-full flex flex-col items-center text-center px-5"
        >
          <h1
            className={`text-5xl font-bold leading-tight tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Karen
            <br />
            Perez
          </h1>

          <p
            className={`text-sm mt-2 font-medium ${
              darkMode ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {t.portfolio}
          </p>

          <div
            className={`w-full h-[2px] rounded-full mt-4 ${
              darkMode
                ? "bg-purple-500"
                : "bg-gradient-to-r from-purple-500 to-purple-700"
            }`}
          />
        </Link>

        {/* Espacio */}
        <div className="mt-12" />

        {/* LANGUAGE */}
        <div className="px-5">
          <div
            className={`flex items-center gap-2 text-sm font-semibold ${
              darkMode ? "text-gray-300" : "text-slate-700"
            }`}
          >
            <FaGlobe className="text-base text-purple-500" />
            <span>{t.language}</span>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage?.(e.target.value)}
            className={`mt-3 w-full rounded-xl px-3 py-2 text-sm font-medium outline-none border transition-all duration-300 ${
              darkMode
                ? "bg-black text-white border-gray-700 focus:border-purple-500"
                : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 focus:border-purple-500 shadow-sm"
            }`}
          >
            <option value="EN">English</option>
            <option value="ES">Español</option>
          </select>
        </div>

        {/* Divider */}
        <hr
          className={`my-8 ${
            darkMode ? "border-gray-800" : "border-slate-200"
          }`}
        />

        {/* NAVIGATION */}
        <div className="px-3">
          <p
            className={`px-4 mb-3 text-xs font-bold uppercase tracking-[0.25em] ${
              darkMode ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {t.navigation}
          </p>

          <NavLink to="/" className={navItem}>
            <FaHome className="text-base" />
            <span className="font-semibold">{t.home}</span>
          </NavLink>

          <div className="mt-10" />

          <p
            className={`px-4 mb-3 text-xs font-bold uppercase tracking-[0.25em] ${
              darkMode ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {t.projectsMenu}
          </p>

          <div className="flex flex-col gap-2">
            <NavLink to="/programming" className={navItem}>
              <FaCode className="text-base" />
              <span className="font-semibold">{t.dev}</span>
            </NavLink>

            <NavLink to="/dataAnalisis" className={navItem}>
              <FaChartLine className="text-base" />
              <span className="font-semibold">{t.dataAnalysis}</span>
            </NavLink>

            <NavLink to="/servicenow" className={navItem}>
              <FaCloud className="text-base" />
              <span className="font-semibold">ServiceNow</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Theme */}
      <div className="px-5 flex justify-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
            darkMode
              ? "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
              : "text-slate-600 hover:bg-purple-100 hover:text-purple-700"
          }`}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
      </>
  );
}

export default Sidebar;