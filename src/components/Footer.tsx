export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Let&apos;s build something <br />
            great together.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-xl">
            Currently available for freelance projects and open to full-time
            opportunities.
          </p>
          <a
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
            href="mailto:hello@godwinemeribe.dev"
          >
            Get in Touch
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-8 gap-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-300 font-bold">
            <span className="material-symbols-outlined">code</span>
            <span>Godwin Emeribe</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 Godwin Emeribe. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              href="#"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
