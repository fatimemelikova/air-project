import React from 'react'
import grid from '../public/grid-outline.svg'
import bell from '../public/bell-outline.svg'
import pin from '../public/pin-outline.svg'
import search from '../public/minimize-outline.svg'
import darkmode from '../public/moon-outline.svg'
import pfp from '../public/Ellipse 4.svg'
function Navbar() {
  return (
 <nav>
  <div className="icons">
    <img src={grid} alt="" />
    <img src={bell} alt="" />
    <div className="location">
      <img src={pin} alt="" />
      <p>Dhaka,Bangladesh</p>
    </div>
    

  </div>
  <div className="search-bar">
    <img src={search} alt="" />
    <input type="text" name="" id="" placeholder='Search' />
  </div>
  <div className="profile">
    <div className="mood-bar">
    <img src={darkmode} alt="" />
  </div>
  <img src={pfp} alt="" />
  </div>
  

 </nav>
  )
}

export default Navbar
