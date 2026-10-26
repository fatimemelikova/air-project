import React from 'react'
import { todayCard } from '../lib/Data'
import uvindex from '../public/UV index Circle.svg'


function Uvindex() {
  return (
<div className="todaycard">
    <p>Wind Status</p>
    <img src={uvindex} alt="" />
    <div className="details">
        <p>{todayCard.uvindex}UV</p>
    </div>


</div>
  )
}

export default Uvindex
