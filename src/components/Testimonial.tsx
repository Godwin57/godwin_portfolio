import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 text-primary">
          <span className="material-symbols-outlined !text-6xl opacity-50">
            format_quote
          </span>
        </div>

        <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-8">
          &ldquo;Godwin delivered an exceptionally robust architecture that
          scaled effortlessly as our user base grew 10x. His attention to detail
          and mastery of React is unmatched.&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary relative">
            <Image
              src="/images/testimonial_avatar.jpg"
              alt="Headshot of Alex Morgan"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900 dark:text-white">
              Alex Morgan
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              CTO at TechFlow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
