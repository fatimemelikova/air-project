import './App.css'
import Navbar from './layout/Navbar'
import TodayCard from './weather/TodayCard'
import Weeklyforecast from './weather/Weeklyforecast'



function App() {

  return (
    <>
    <Navbar/>
      <Weeklyforecast/>
      <TodayCard/>
    </>
  )
}

export default App
