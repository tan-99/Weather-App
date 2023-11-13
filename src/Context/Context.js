import React, {useReducer, useContext} from 'react'
import { WeatherReducer } from './Reducer'

const WeatherAppContext = React.createContext()

const WeatherAppProvider = ({children}) => {

    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {
            "city": "Mumbai", 
            "lat": "19.0761", 
            "lng": "72.8775", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Mahārāshtra", 
            "capital": "admin", 
            "population": "24973000", 
            "population_proper": "12478447"
        },
        current: '',
        hourly: ''
    }) //initial state sent

    return(
        <>
            <WeatherAppContext.Provider value={{state, dispatch}}>
                {children}
            </WeatherAppContext.Provider>
        </>
    )
}

export default WeatherAppProvider

export const UseWeatherAppContext = () => {
    return useContext(WeatherAppContext)
}