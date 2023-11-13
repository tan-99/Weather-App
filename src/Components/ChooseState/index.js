import React, { useEffect } from "react";
import cities from "../../Data/in.json"
import { UseWeatherAppContext } from "../../Context/Context";

import axios from 'axios'

const ChooseStateComponents = () => {

    const {state: {city}, dispatch} = UseWeatherAppContext()
    // console.log('UseWeatherAppContext',UseWeatherAppContext(), city)

    const handleChange = (e) => {
        let chosenCity = e.target.value
        const selectedCity = cities.filter(city => city.city===chosenCity)[0]
        dispatch({
            type: 'SET_CITY',
            payload: selectedCity
        })
    }
    console.log('UseWeatherAppContext', UseWeatherAppContext(), city)

    //api call
    const APIKEY = '02a5bd2215fab529458dcef7c5b10fae'
    let lat = city && city.lat ? city.lat : ''
    let lng = city && city.lng ? city.lng : ''
    let exclude = 'hourly,minutely'
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&exclude=${exclude}&units=metric&cnt=5&appid=${APIKEY}`

    const fetchData = () => {
        console.log(URL);
        axios(URL).then((data) => {
            console.log(data);
            let _hourly = data.data.list.slice(0,8)
            dispatch({
                type: 'SET_HOURLY',
                payload: _hourly
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    //lifecycle method  to call fetchData function
    //you want the function to run when city is updated, hence the 'dependency'
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [city])
    
    return(
        <>

            <div className="stateWrap">
                <select name="" id="" className="stateMenu" defaultValue={city.city} onChange={handleChange}>
                    {
                        cities && cities.length>0 && cities.map((city) => {
                            return(
                                <option key={`${city.lat}${city.population}`} value={`${city.city}`}>
                                    {city.city} - {city.admin_name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
    
}

export default ChooseStateComponents