
import {
  CloudSun,
  Code2,
  Heart,
  MapPin,
  Mail,
  ArrowUp,
}  from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <CloudSun size={24} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  SkyCast
                </h2>
                
              </div>
            </div>

            <p className="max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
              Get accurate weather information, forecasts, and
              real-time weather conditions for locations around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#forecast"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Forecast
                </a>
              </li>

              <li>
                <a
                  href="#favorites"
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Favorite Cities
                </a>
              </li>

              <li>
                <button
                  onClick={scrollToTop}
                  className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </div>

          {/* Weather Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Weather
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={16} />
                Global Weather
              </li>

              <li className="text-sm text-slate-500 dark:text-slate-400">
                Real-time Conditions
              </li>

              <li className="text-sm text-slate-500 dark:text-slate-400">
                Hourly Forecast
              </li>

              <li className="text-sm text-slate-500 dark:text-slate-400">
                7-Day Forecast
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h3>

            <p className="mb-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Built with React and modern web technologies.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <Code2 size={19} />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200 dark:border-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left">
            © {new Date().getFullYear()} SkyCast. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            Made with
            <Heart
              size={15}
              className="fill-current text-red-500"
            />
            using React
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
          >
            <ArrowUp size={16} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

