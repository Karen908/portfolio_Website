import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import Sidebar from "../components/Sidebar";
import { translations } from "../data/translations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCheckCircle } from "react-icons/fa";

function ProjectDetail({ language, setLanguage, darkMode, setDarkMode }) {
  const t = translations[language];

  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10">Proyecto no encontrado</div>;
  }

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-[#bcc5d3] text-[#111827]"
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

      {/* Contenido */}
      <div className="ml-40 p-14 py-10">
        <div
          className={` grid lg:grid-cols-2
    rounded-3xl
    p-8
    h-fit
    transition-all
    duration-300
    ${
      darkMode
        ? "bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.04)]"
        : "bg-white border border-gray-200 shadow-xl"
    }
  `}
        >
          {" "}
          <div>
            <h1 className="text-5xl font-bold mb-4">
              {project.title[language]}
            </h1>

            <p
              className={`mb-8 text-lg ${darkMode ? "text-gray-400" : "text-gray-700"}`}
            >
              {project.description[language]}
            </p>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-10 text-lg font-medium">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105
                    ${
                      darkMode
                        ? "bg-purple-500/15 border border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-white"
                        : "bg-purple-100 border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white"
                    }
                      `}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Características */}
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-5">
              {t.features}
            </h2>

            <ul className="mb-10 space-y-4">
              {project.features[language].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-purple-500 flex-shrink-0" />

                  <span
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Resultados */}
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-5">
              {t.results}
            </h2>

            <ul className="mb-10 space-y-4">
              {project.results[language].map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-purple-500 flex-shrink-0" />

                  <span
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {result}
                  </span>
                </li>
              ))}
            </ul>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 font-bold">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
          bg-purple-700
          hover:bg-purple-600
          text-white
          px-5 py-3
          rounded-xl
          transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
        "
                >
                  {t.code}
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`
          border border-purple-700
          px-5 py-3
          rounded-xl
          transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
          ${
            darkMode
              ? "text-purple-400 hover:bg-purple-700 hover:text-white"
              : "text-purple-700 hover:bg-purple-700 hover:text-white"
          }
        `}
                >
                  {t.demo}
                </a>
              )}
            </div>
          </div>
          {/* ================= DERECHA ================= */}
          {/* ================= DERECHA ================= */}
          <div>
            {/* ======== APPS MÓVILES ======== */}
            {project.type === "mobile" ? (
              <>
                {/* Desktop / Tablet */}
                <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {project.images?.map((image, index) => (
                    <div
                      key={index}
                      className={`
                p-2
                rounded-[2rem]
                shadow-2xl 
                transition
                hover:scale-[1.03]
                ${
                  darkMode
                    ? "bg-black border border-white/10 hover:border-purple-400/40"
                    : "bg-white border border-gray-300 hover:shadow-[0_20px_50px_rgba(0,0,0,.35)] "
                }
              `}
                    >
                      <img
                        src={image}
                        alt={`${project.title[language]} ${index + 1}`}
                        className="
                  w-full
                  rounded-[1.5rem]
                "
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                  >
                    {project.images?.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center pb-10">
                          <div
                            className={`
                      p-2
                      rounded-[2rem]
                      max-w-[280px]
                      shadow-xl
                      ${
                        darkMode
                          ? "bg-black border border-white/10 hover:border-purple-400/40"
                    : "bg-white border border-gray-300 hover:shadow-[0_20px_50px_rgba(0,0,0,.35)] "
                      }
                    `}
                          >
                            <img
                              src={image}
                              alt={`${project.title[language]} ${index + 1}`}
                              className="
                        w-full
                        rounded-[1.5rem]
                      "
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            ) : (
              /* ======== WEB Y DESKTOP ======== */
              <div className="space-y-4">
                {/* Imagen Principal */}
                {project.images?.[0] && (
                  <img
                    src={project.images[0]}
                    alt={`${project.title[language]} 1`}
                    className={`
              w-full
              rounded-2xl
              shadow-xl
              hover:scale-[1.02]
              transition
              ${darkMode ? "border border-white/10" : "border border-gray-300"}
            `}
                  />
                )}

                {/* Dos imágenes */}
                <div className="grid grid-cols-2 gap-4">
                  {project.images?.[1] && (
                    <img
                      src={project.images[1]}
                      alt={`${project.title[language]} 2`}
                      className={`
                w-full
                rounded-2xl
                shadow-xl
                hover:scale-[1.02]
                transition
                ${darkMode ? "border border-white/10" : "border border-gray-300"}
              `}
                    />
                  )}

                  {project.images?.[2] && (
                    <img
                      src={project.images[2]}
                      alt={`${project.title[language]} 3`}
                      className={`
                w-full
                rounded-2xl
                shadow-xl
                hover:scale-[1.02]
                transition
                ${darkMode ? "border border-white/10" : "border border-gray-300"}
              `}
                    />
                  )}
                </div>

                {/* Imagen Inferior */}
                {project.images?.[3] && (
                  <img
                    src={project.images[3]}
                    alt={`${project.title[language]} 4`}
                    className={`
              w-full
              rounded-2xl
              shadow-xl
              hover:scale-[1.02]
              transition
              ${darkMode ? "border border-white/10" : "border border-gray-300"}
            `}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
