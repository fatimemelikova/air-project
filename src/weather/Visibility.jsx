import React from 'react'
import { todayCard } from '../lib/Data'
import visibility from '../public/Visibility Icon 1.svg'

function Visibility() {
  return (
<div className="todaycard">
    <p>Wind Status</p>
    <img src={visibility} alt="" />
    <div className="details">
        <p>{todayCard.visibility}</p>
        <p className='detail'>Haze is affecting <br /> visibility</p>
    </div>


</div>
  )
}

export default Visibility
