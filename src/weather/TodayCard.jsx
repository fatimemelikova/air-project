import React from 'react'
import Windstatus from './Windstatus'
import Uvindex from './Uvindex'
import Humidity from './Humidity'
import Map from './Map'
import Visibility from './Visibility'
import Othercities from './Othercities'

function TodayCard() {
  return (
        <div className="today-section">
            <h2>
                Today's Overview
            </h2>
            <div className="bottom-section">
                
            <div className="today-cards">
                <Windstatus/>
                <Uvindex/>
                <Humidity/>
                <Visibility/>
            </div>
            <Map/>
            <Othercities/>
            </div>
        </div>
      
  )
}

export default TodayCard
