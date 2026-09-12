import { createContext, useState } from "react";



export const WeatherContext = createContext();

export const WeatherProvider = ({children})=>{

    const [data,setData]= useState()


    return (
        <WeatherContext.Provider value={{data,setData}}>
            {children}
        </WeatherContext.Provider>
    )
}