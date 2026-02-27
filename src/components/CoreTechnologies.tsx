const technologies = [
  {
    name: "React",
    icon: "code_blocks",
    colorClass: "bg-[#61DAFB]/10 group-hover:bg-[#61DAFB]/20",
    iconColor: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: "terminal",
    colorClass: "bg-white/10 group-hover:bg-white/20",
    iconColor: "text-white",
  },
  {
    name: "TypeScript",
    icon: "javascript",
    colorClass: "bg-[#3178C6]/10 group-hover:bg-[#3178C6]/20",
    iconColor: "text-[#3178C6]",
  },
  {
    name: "Tailwind",
    icon: "style",
    colorClass: "bg-[#38B2AC]/10 group-hover:bg-[#38B2AC]/20",
    iconColor: "text-[#38B2AC]",
  },
  {
    name: "Node.js",
    icon: "dns",
    colorClass: "bg-[#339933]/10 group-hover:bg-[#339933]/20",
    iconColor: "text-[#339933]",
  },
  {
    name: "MongoDB",
    icon: "database",
    colorClass: "bg-[#47A248]/10 group-hover:bg-[#47A248]/20",
    iconColor: "text-[#47A248]",
  },
];

export default function CoreTechnologies() {
  return (
    <section
      id="skills"
      className="py-24 bg-surface-dark/50 border-y border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Core Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My tech stack is focused on performance, scalability, and developer
            experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass-card p-6 rounded-xl flex flex-col items-center gap-4 hover:border-primary/50 transition-colors group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-full ${tech.colorClass} flex items-center justify-center transition-colors`}
              >
                <span
                  className={`material-symbols-outlined ${tech.iconColor} !text-3xl`}
                >
                  {tech.icon}
                </span>
              </div>
              <h3 className="font-bold text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
