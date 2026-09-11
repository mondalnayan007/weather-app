
import { useState } from "react";
import {
  CloudSun,
  MapPin,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMyLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      
      const latitude = position.coords.latitude;  
      const longitude = position.coords.longitude; 

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      
    });
  }

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Forecast", href: "#forecast" },
    { name: "Favorites", href: "#favorites" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <CloudSun size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              SkyCast
            </h1>
            
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-2 md:flex">

          {/* Location */}
          <button
          onClick={handleMyLocation}
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <MapPin size={17} />
            <span>My Location</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.name}
              </a>
            ))}

            <button
            onClick={handleMyLocation}
            className="mt-2 flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800">
              <MapPin size={17} />
              Use My Location
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

