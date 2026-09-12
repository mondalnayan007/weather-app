

export const getWeather =async (lat,lon)=>{

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,precipitation,weather_code,cloud_cover,rain,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10mZ`

    const result = await fetch(url) ;
    const data= await result.json();
    console.log('weather data :', data);

}





// // ৪. Weather API Call (Latitude ও Longitude চেঞ্জ হলে রান হবে)
  // useEffect(() => {
  //   if (!latitude || !longitude) return;

  //   fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
  //     .then(res => res.json())
  //     .then(data => setWeatherData(data))
  //     .catch(err => console.error("Weather Fetch Error:", err));
  // }, [latitude, longitude]);
