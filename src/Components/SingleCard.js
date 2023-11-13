import dayjs from 'dayjs';
import React from 'react';

const SingleCardComponent = ({item, className, onClick}) => {

    // const WeekDays = [
    //     "Sunday",
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday"
    // ]

    const WeekDaysIndex = dayjs.unix(item.dt).format('ddd')
    console.log(WeekDaysIndex)
    // const weekdayy = WeekDays[WeekDaysIndex]
    // console.log(weekdayy)
    //dayjs.unix(item.dt).$d.toString().slice(0,3)
    const formattedTime = dayjs.unix(item.dt).format('HH:mm A')    
    return(
        <>
            <li key={item.moonrise} className={className} onClick={onClick}>
                <img alt="icon" className="day-icon" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                
                <span className="day-name">{WeekDaysIndex}</span>
                {formattedTime && (
                    <span className='time'>
                        {formattedTime}
                    </span>
                )}

                <span className="day-temp">
                    {Math.round(item.main.temp)} <sup>o</sup>C
                </span>
            </li>
        </>
    )
}

export default SingleCardComponent;