import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import ProjectDetail from "./pages/ProjectDetail";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [language, setLanguage] = useState("EN");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      <Route
        path="/programming"
        element={
          <Programming
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      {/* Data Analysis */}
      <Route
        path="/dataAnalisis"
        element={
          <ComingSoon
            title="Data Analysis"
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      {/* ServiceNow */}
      <Route
        path="/servicenow"
        element={
          <ComingSoon
            title="ServiceNow"
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      <Route
        path="/projects/:id"
        element={
          <ProjectDetail
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
    </Routes>
  );
}

export default App;