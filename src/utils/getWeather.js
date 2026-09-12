

export const getWeather = async (lat, lon) => {
  // URL validation এবং টাইপো ঠিক করা (wind_direction_10mZ -> wind_direction_10m)
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,precipitation,weather_code,cloud_cover,rain,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m`;

  try {
    const result = await fetch(url);
    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.reason || "Failed to fetch weather data");
    }

    // ১. Current Data Format
    const current = {
      time: data.current.time,
      temperature: data.current.temperature_2m,
      apparentTemperature: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
      weatherCode: data.current.weather_code,
      cloudCover: data.current.cloud_cover,
      windSpeed: data.current.wind_speed_10m,
      windDirection: data.current.wind_direction_10m,
      isDay: Boolean(data.current.is_day),
      precipitation: data.current.precipitation,
      rain: data.current.rain,
      units: {
        temp: data.current_units?.temperature_2m || "°C",
        wind: data.current_units?.wind_speed_10m || "km/h",
        humidity: data.current_units?.relative_humidity_2m || "%",
      },
    };

    // ২. Hourly Data Format (array of objects e convert kora)
    const hourly = data.hourly.time.map((time, index) => ({
      time: time,
      temperature: data.hourly.temperature_2m[index],
    }));

    // ৩. Structured Return
    return {
      current,
      hourly,
    };
  } catch (error) {
    console.error("Error formatting weather data:", error);
    return null;
  }
};





