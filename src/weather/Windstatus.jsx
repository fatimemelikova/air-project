import React from 'react'
import windstatus from '../public/Wind Satus Rectangle.svg'
import { todayCard } from '../lib/Data'
function Windstatus() {
  return (
<div className="todaycard">
    <p>Wind Status</p>
    <img src={windstatus} alt="" />
    <div className="details">
        <p>{todayCard.windstatus}Km/h</p>
        <p>6.20 AM</p>
    </div>


</div>
  )
}

export default Windstatus
