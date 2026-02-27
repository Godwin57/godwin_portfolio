export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined !text-xl">code</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Godwin Emeribe
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
              href="#blog"
            >
              Blog
            </a>
            <a
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400">
              <span className="material-symbols-outlined">light_mode</span>
            </button>
            <a
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
