import React from "react";
import { WeeklyWeather } from "../lib/Data";
import friday from '../public/Friday.svg'
import graphe from '../public/Chance og rain graph.svg'

function Weeklyforecast() {
  return (
    <>
      <section className="weekly-forecast">
        {WeeklyWeather.map((item, index) =>
          item.day == "Friday" ? (
            <div className="Friday" key={index}>
              <div className="title">
                <p>{item.day}</p>
                <p>11:45 AM</p>
              </div>
              <div className="content">
                <div className="content-header">
                    <h2>
                    {item.temp}C
                  </h2>
                  <img src={friday} alt="" />
                </div>
                <div className="content-text">
                <div className="left">
                   <p>Real Feel : {item.RealFeel}</p>
                  <p>Wind N-E : {item.windNE}</p>
                  <p>pressure : {item.pressure}</p>
                  <p>Humidity : {item.humidity}</p>
                </div>
                <div className="right">
                    
                    <p>{item.sunrise}</p>
                    <p>{item.sunset}</p>
                    
                </div>
              
            </div>
            </div>
            </div>
          ) : (
            <div className="other-days">
                <div className="day">
                <p className="day-name">{item.day}</p>
                <div className="line"></div>
                <img src={friday}alt="" />
                <h2>{item.temp}</h2>

            </div>
            </div>
            
          ),
        )}
        <img className="graphe" src={graphe} alt="" />

      </section>
    </>
  );
}

export default Weeklyforecast;
