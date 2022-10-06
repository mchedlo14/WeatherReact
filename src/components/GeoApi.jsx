import React, { useEffect, useState } from 'react'
import '../assets/GeoApi.css'

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log( "Geolocation is not supported by this browser.");
  }
}
let x,y;

function showPosition(position) {
  x = position.coords.latitude
  y = position.coords.longitude
}

getLocation()



const GeoApi = ({setLocData}) => {
  // აქ შეიქმნება სტეიტი სადაც შეინახება იუზერის ამინდი ლოკაციის მიხედვით
  const [locationData,setLocationData] = useState({})
  
  const getWeatherData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=d136918b7413876eb34736bd8a116199`)
    const data = await res.json()
    setLocData(data)
    setLocationData(data)
  }


  useEffect(() => {
    getWeatherData()
  },[])
  return (
    <>
    {
      Object.keys(locationData).length > 0 ?
    <div className='information-container'>
      <div className='detail-first-box'>
        <p className='highlights-text'>Today's Highlights</p>
        <div className='highlights-first-div'>
          <div className='wind-box'>
            <h3 className='wind-title'>Wind status</h3>
            <p className='wind-text'>{locationData.wind.speed} mph</p>
          </div>

          <div className='wind-box'>
            <h3 className='wind-title'>Humidity</h3>
            <p className='wind-text'>{locationData.main.humidity}%</p>
            <input type='range' min="0" max={100} value={locationData.main.humidity} className='range-input'/>
          </div>

        </div>

        <div className='highlights-second-div'>
          <div className='wind-box2'>
            <h3 className='wind-title'>Visibility</h3>
            <p className='wind-text'>{(locationData.visibility / 1000).toFixed(1)} miles</p>
          </div>

          <div className='wind-box2'>
            <h3 className='wind-title'>Air Pressure</h3>
            <p className='wind-text'>{locationData.main.pressure} mb</p>
          </div>
        </div>
      </div>
    </div>
    :
    <></>
    }
    </>
  )
  
}

export default GeoApi