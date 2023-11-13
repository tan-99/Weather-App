import React from 'react'
import { UseWeatherAppContext } from "../../Context/Context"
import { useState, useContext } from "react";

const HumidityComponent = () => {

    const { state: {current, city}, dispatch } = UseWeatherAppContext()

    const uvLevel = (uvLevel) => {
        if(uvLevel <= 2) return 'Low'
        if(uvLevel <= 5) return 'Medium'
        if(uvLevel <= 7) return 'High'
        if(uvLevel > 7) return 'Very High'
    }

    return(
        <>
            {
                current ? 
                <div className="humidityWrap">
                    <div className="humidityData">
                        <div className="title">Humidity</div>
                        <div className="value">{current.main.humidity}%</div>
                    </div>
                    <div className="humidityData">
                        <div className="title">Wind</div>
                        <div className="value">{current.wind.speed} km/h</div>
                    </div>
                </div> :
                ''
            }
        </>
    )
}

export default HumidityComponent