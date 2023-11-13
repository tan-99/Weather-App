import React from 'react'
import { UseWeatherAppContext } from "../../Context/Context";
import SingleCardComponent from "../../Components/SingleCard"
import { useState, useEffect } from 'react';

const WeekInfoCardComponent = () => {

    const {state: {hourly}, dispatch} = UseWeatherAppContext()

    const [selectedCard, setSelectedCard] = useState(0)

    const updateCurrent = () => {
        return(
            dispatch({
                type:'SET_CURRENT',
                payload: hourly[selectedCard]
            })
        )
    }

    useEffect(() => {
        updateCurrent()
        // eslint-disable-next-line
    }, [hourly, selectedCard])

    return (
        <>
            <div className="cardWrap">
                <ul className='cardList'>
                    {
                        hourly && hourly.length > 0 ? hourly.map((item, index) => {
                            return <SingleCardComponent key={index} item={item} className={index === selectedCard ? 'active': ''} onClick={() => {
                                setSelectedCard(index);
                                updateCurrent()
                            }} />
                        }) : ''
                    }
                </ul>
            </div>
        </>
    )
}

export default WeekInfoCardComponent;