import { useEffect, useState } from "react";
import {
  CloudSun,
  MapPin,
  Moon,
  Sun,
  Menu,
  X,
  Search
} from "lucide-react";
import { getGeoLocation } from "../../utils/getGeoLocation";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cityInput, setCityInput] = useState(''); // Search input state
  const [cityName, setCityName] = useState('Agailjhara, Barishal'); // Displayed location state
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ১. ইউজার নিজের কারেন্ট লোকেশন পাওয়ার ফাংশন
  const handleMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setCityName("My Location");
      });
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!cityInput.trim()) return;

    
    getGeoLocation(cityInput);
    
   
  };

 

  // // ৪. Weather API Call (Latitude ও Longitude চেঞ্জ হলে রান হবে)
  // useEffect(() => {
  //   if (!latitude || !longitude) return;

  //   fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
  //     .then(res => res.json())
  //     .then(data => setWeatherData(data))
  //     .catch(err => console.error("Weather Fetch Error:", err));
  // }, [latitude, longitude]);

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

        {/* Desktop Search Bar with Button */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Search location (e.g., Dhaka, Agailjhara)..."
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-20 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-500"
            />
            <Search size={16} className="absolute left-3 text-slate-400" />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition duration-150 disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {/* Right Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* My Location */}
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

      {/* Mobile Search & Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <form onSubmit={(e) => { handleSearch(e); setMenuOpen(false); }} className="relative mb-3 flex items-center">
            <input
              type="text"
              placeholder="Search location..."
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-20 text-sm text-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <Search size={16} className="absolute left-3 text-slate-400" />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition duration-150 disabled:opacity-50"
            >
              {loading ? "..." : "Search"}
            </button>
          </form>

          <button
            onClick={() => { handleMyLocation(); setMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800">
            <MapPin size={17} />
            Use My Location
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;