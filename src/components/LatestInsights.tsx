import Image from "next/image";

const articles = [
  {
    image: "/images/blog_code_editor.jpg",
    alt: "Code editor showing syntax highlighting",
    category: "DEVELOPMENT",
    date: "Oct 12, 2023",
    title: "Optimizing React Rendering Performance",
    excerpt:
      "Exploring advanced techniques to reduce re-renders and improve application speed using useMemo and useCallback effectively.",
  },
  {
    image: "/images/blog_laptop_glasses.jpg",
    alt: "Laptop computer with code on screen and glasses on keyboard",
    category: "ARCHITECTURE",
    date: "Sep 28, 2023",
    title: "Scalable Microservices with Node.js",
    excerpt:
      "A guide to breaking down monolithic applications into maintainable services using Docker and Kubernetes.",
  },
  {
    image: "/images/blog_colorful_waves.jpg",
    alt: "Abstract colorful digital waves background",
    category: "DESIGN",
    date: "Sep 15, 2023",
    title: "Mastering Tailwind CSS for Teams",
    excerpt:
      "Best practices for configuring and extending Tailwind to maintain consistency across large development teams.",
  },
];

export default function LatestInsights() {
  return (
    <section className="py-24" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Latest Insights
          </h2>
          <p className="text-slate-400">
            Thoughts on software architecture and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4 h-48 relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-primary font-bold mb-2">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span className="text-slate-500 font-normal">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-400 line-clamp-2">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
