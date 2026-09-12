import { use } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { 
  Thermometer, 
  Wind, 
  Droplets, 
  Eye, 
  Sun, 
  Cloud, 
  Clock, 
  Compass, 
  CloudRain 
} from 'lucide-react';

const Home = () => {
  const { data } = use(WeatherContext);

  // ডেটা লোড না হওয়া পর্যন্ত লোডার দেখাবে
  if (!data || !data.current) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  const { current, hourly } = data;

  // WMO weather code থেকে টেক্সট ও আইকন নির্ধারণ
  const getWeatherDetails = (code) => {
    switch (code) {
      case 0: return { label: "Clear Sky", icon: <Sun className="text-yellow-500" size={48} /> };
      case 1:
      case 2:
      case 3: return { label: "Partly Cloudy", icon: <Cloud className="text-slate-400" size={48} /> };
      case 61:
      case 63:
      case 65: return { label: "Rainy", icon: <CloudRain className="text-blue-400" size={48} /> };
      default: return { label: "Cloudy", icon: <Cloud className="text-slate-400" size={48} /> };
    }
  };

  const weatherInfo = getWeatherDetails(current.weatherCode);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 dark:bg-slate-950 dark:text-slate-100 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">

        {/* 1. Main Current Weather Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
                Current Weather
              </span>
              <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">
                {Math.round(current.temperature)}{current.units?.temp || '°C'}
              </h1>
              <p className="mt-2 text-lg text-blue-100">
                Feels like {Math.round(current.apparentTemperature)}{current.units?.temp || '°C'} • {weatherInfo.label}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 sm:items-end">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                {weatherInfo.icon}
              </div>
              <span className="text-xs text-blue-200">
                Last updated: {new Date(current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Weather Highlights Grid */}
        <div>
          <h2 className="mb-4 text-xl font-bold tracking-tight">Today's Highlights</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

            {/* Feels Like */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Thermometer size={20} className="text-blue-500" />
                <span className="text-xs font-semibold uppercase">Feels Like</span>
              </div>
              <p className="mt-3 text-2xl font-bold">
                {current.apparentTemperature}{current.units?.temp || '°C'}
              </p>
            </div>

            {/* Humidity */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Droplets size={20} className="text-cyan-500" />
                <span className="text-xs font-semibold uppercase">Humidity</span>
              </div>
              <p className="mt-3 text-2xl font-bold">
                {current.humidity}{current.units?.humidity || '%'}
              </p>
            </div>

            {/* Wind Speed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Wind size={20} className="text-teal-500" />
                <span className="text-xs font-semibold uppercase">Wind Speed</span>
              </div>
              <p className="mt-3 text-2xl font-bold">
                {current.windSpeed} <span className="text-sm font-normal text-slate-500">{current.units?.wind || 'km/h'}</span>
              </p>
            </div>

            {/* Cloud Cover */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Cloud size={20} className="text-indigo-500" />
                <span className="text-xs font-semibold uppercase">Cloud Cover</span>
              </div>
              <p className="mt-3 text-2xl font-bold">
                {current.cloudCover}%
              </p>
            </div>

          </div>
        </div>

        {/* 3. Hourly Forecast (Horizontal Scroll) */}
        {hourly && hourly.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center gap-2">
              <Clock size={18} className="text-blue-500" />
              <h2 className="text-lg font-bold">Hourly Forecast</h2>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
              {hourly.slice(0, 24).map((item, index) => (
                <div
                  key={index}
                  className="flex min-w-[90px] flex-col items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                >
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <Sun size={24} className="my-3 text-yellow-500" />
                  <span className="text-base font-bold">
                    {Math.round(item.temperature)}°
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;