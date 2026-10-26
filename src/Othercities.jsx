import React from 'react'
import { othercities } from './lib/Data'

function Othercities() {
  return (
<div className="othercities">

{
  othercities.map((item)=>(
    <div className="city-bar">
      <div className="contentt">
        
      <p className='countryname'>{item.country}</p>
      <p className='cityname'>{item.city}</p>
      <p className='cityair'>{item.air}</p>

      </div>
      <img src={item.img} alt="" />

    </div>
  ))
}
</div>
  )
}

export default Othercities
