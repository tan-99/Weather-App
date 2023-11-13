import React from 'react'
import dayjs from 'dayjs'
import { UseWeatherAppContext } from "../../Context/Context";

const LeftComponent = () => {

    const { state: {city, current} } = UseWeatherAppContext()

    // const WeekDays = [
    //     "Sunday",
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday"
    // ]

    if(!current) return <div>Loading...</div>

    const WeekDay = dayjs.unix(current.dt).format('dddd')
    const formattedTime = dayjs.unix(current.dt).format('HH:mm A')    

    console.log(WeekDay)
    return(
        <>
            <div className="leftWrap">
                <div className="dateWrap">
                    {WeekDay ? 
                    <h2>{WeekDay}, {formattedTime}</h2>: 
                    <h2></h2>
                    }
                    <span className="dateDay">
                        {dayjs.unix(current.dt).format('DD MMMM YYYY')}
                    </span>
                    <span className="locationName">
                        {city.city} - {city.admin_name}, {city.country}
                    </span>

                    <div className="weatherContainer">
                        <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="icon" />
                        <h1 className="weatherTemp">{Math.round(current.main.temp)} <sup>o</sup>C</h1>
                        <h3 className="weatherDesc">{current.weather[0].main}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftComponent