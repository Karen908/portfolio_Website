import { FaCode, FaChartLine, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ title, description, icon, color, button, link }) {
  const icons = {
    code: <FaCode size={34} />,
    data: <FaChartLine size={34} />,
    servicenow: <FaCogs size={34} />,
  };

  return (
    <div
      className={` 
        rounded-3xl p-8 py-10 transition duration-300 space-y-4
        hover:-translate-y-2 hover:scale-[1.02]
        border backdrop-blur-md
        flex flex-col items-center text-center shadow-xlshadow-black/10
        ${color}
        border-white/10 text-white hover:shadow-slate-400/30 dark:hover:shadow-black/40 hover:shadow-2xl
duration-300

    ${color}
    text-white
      `}
    >
      {/* ICON */}
      <div className="mb-6 text-white">{icons[icon]}</div>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-white">{title}</h2>

      {/* DESCRIPTION */}
      <p className="text-lg leading-8 mb-8 text-white/90">{description}</p>

      {/* BUTTON */}
      <Link
        to={link}
        className="
    inline-block
    px-6 py-3 rounded-xl text-lg font-semibold 
    transition duration-300 hover:-translate-y-1
     bg-white/10 backdrop-blur border border-white/15 hover:bg-white/20
  "
      >
        {button}
      </Link>
    </div>
  );
}

export default ProjectCard;
