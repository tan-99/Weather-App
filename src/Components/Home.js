import React from 'react'
import ChooseStateComponents from './ChooseState';
import WeekInfoCardComponent from './WeeklyInfo';
import HumidityComponent from './Humidity';
import LeftComponent from './Left';

const HomeComponents = () => {

    return (
        <>
            <div className="homeWrap">
                <div className="weatherSection">

                    <LeftComponent />
                    <div className="rightSide">
                        <ChooseStateComponents /> <br />
                        <WeekInfoCardComponent /> <br />
                        <HumidityComponent /> <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;