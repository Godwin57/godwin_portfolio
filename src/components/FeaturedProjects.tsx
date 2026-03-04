import Image from "next/image";

const projects = [
  {
    title: "E-commerce Dashboard",
    image: "/images/ecommerce_dashboard.jpg",
    alt: "Screenshot of an E-commerce analytics dashboard with graphs",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    description:
      "A high-performance analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
  },
  {
    title: "Fintech Mobile App",
    image: "/images/fintech_mobile_app.jpg",
    alt: "Screenshot of a mobile fintech application interface",
    tags: ["React Native", "Redux", "Node.js"],
    description:
      "Secure and intuitive banking application with real-time updates, biometric authentication, and spending insights.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Selected works that showcase complex problem solving.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            href="#"
          >
            View All Projects{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary hover:text-white transition-colors text-slate-600 dark:text-slate-400"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {project.description}
                </p>
                <a
                  className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary border-b border-primary pb-0.5 transition-colors"
                  href="#"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
