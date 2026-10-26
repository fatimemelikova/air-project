import TodayCard from "../weather/TodayCard"
import windy from '../public/Windy 1 (1).svg'
import sunny from '../public/Sunny (2) 2 (2).svg'
import light from '../public/Light SnowShower 1.svg'
import Cloudy from '../public/Rainy (2) 2 (2).svg'

export const WeeklyWeather = [
    {
       day : "Friday",
       temp : 16,
       RealFeel : 18,
       windNE:"6-7km/h",
       pressure : "100MB",
       humidity : 51,
       sunrise : "5:30AM",
       sunset : "6:45"
    },
    {
       day : "Sat",
       temp : 10
    },
    {
       day : "Sun",
       temp : 15
    },
    {
       day : "Mon",
       temp : 11
    },
    {
       day : "Tues",
       temp : 10
    },
    {
       day : "Wed",
       temp : 12
    },
    {
       day : "Thu",
       temp : 10
    },
]

export const todayCard={
   windstatus:7.50,
   uvindex : 5.50,
   humidity:"84%",
   visibility:"04km"


}

export const othercities = [
   {
      country: "China", 
      city : "Beijing",
      air : "Cloudy",
      img: Cloudy
   },
   {
      country: "US", 
      city : "California",
      air : "Windly",
      img: windy
   },
   {
      country: "Dubai", 
      city : "Arab Emirates",
      air : "Mostly Sunny",
      img:sunny
   },
   {
      country: "Canada", 
      city : "Charlottetown",
      air : "Light SnowShower",
      img: light
   }
]



