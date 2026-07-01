function SkillCard({ title, skills, color, darkMode }) {
  return (
    <div
      className={`
        rounded-3xl p-4 border backdrop-blur-md py-10 mt-8
        transition duration-300 hover:-translate-y-2 hover:scale-[1.02]
        ${color}
        ${
          darkMode
            ? "border-white/10 text-white"
            : "border-black/10 text-gray-900"
        }
      `}
    >
      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-8 text-center">
        {title}
      </h2>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
              {skill.icon}
            </div>

            {/* NAME */}
            <p className="text-sm font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;