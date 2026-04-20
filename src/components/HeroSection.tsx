import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-surface-dark border border-blue-100 dark:border-slate-800 text-xs font-medium text-primary dark:text-primary-light">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for new projects
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Hi, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Godwin Emeribe
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Fullstack Developer & AI powered UI/ UX designer crafting
                high-performance web experiences with React, NextJS, and
                TypeScript. Building the future of the web, one component at a
                time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                Hire Me
              </button>
              <button className="h-12 px-8 rounded-lg bg-slate-200 dark:bg-surface-dark border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base hover:bg-slate-300 dark:hover:bg-slate-800 transition-all">
                View Projects
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-slate-400 dark:text-slate-500 pt-4">
              <a
                className="hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                className="hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                className="hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-200 dark:border-slate-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 z-10" />
              <Image
                src="/images/hero_code_monitor.jpg"
                alt="Abstract code on a monitor screen in a dark room"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge: Projects Completed */}
            <div
              className="absolute bottom-12 -left-6 bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl z-20 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined">dataset</span>
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Projects Completed
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  10+
                </p>
              </div>
            </div>

            {/* Floating badge: Client Satisfaction */}
            <div
              className="absolute top-12 -right-6 bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-xl z-20 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Client Satisfaction
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
