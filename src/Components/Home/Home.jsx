import React, { useEffect, useState } from 'react';

const Home = () => {

    const [city,setCity]= useState('Dhaka');
    const [weatherData,setWeatherData]= useState('');
    console.log(weatherData);
    


    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${import.meta.env.API_KEY}`)
        .then(res=>res.json())
        .then(data=>setWeatherData(data))
    },[city])






    return (
        <div>
            This is home Component
        </div>
    );
};

export default Home;