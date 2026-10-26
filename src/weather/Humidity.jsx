import React from 'react'
import { todayCard } from '../lib/Data'
import humidity from '../public/carbon_humidity-alt.svg'


function Humidity() {
  return (
<div className="todaycard">
    <p>Wind Status</p>
    <img src={humidity} alt="" />
    <div className="details">
        <p>{todayCard.humidity}</p>
        <p className='detail'>The dew point is 27 <br /> right now</p>
    </div>


</div>
  )
}

export default Humidity
