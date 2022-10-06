import React, { useEffect, useRef, useState } from 'react'
import '../assets/CityInput.css'

const date_ = new Date()
const day = date_.getDay()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const CityInput = ({setSearchedCity,getWeatherData,locData,weatherData,status}) => {
    const [city,setCity] = useState(locData.name)

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    },[])

    useEffect(() => {
        setSearchedCity(city)
    },[city])

  return (
    <div className='input-wrapper'>
      <div className='input-box'>
        <input type='text' placeholder = 'Type Country' onChange={e => setCity(e.target.value)} ref={inputRef}/>
        <button onClick={getWeatherData}>Search</button>
      </div>

      {
        Object.keys(weatherData).length > 0 ?
        <>
        <div className='name-container'>
          <div className='detail-about-city'>

            <p className='input-city-name'>
              {weatherData.name}
            </p>

            <p className='temperature'>
              {Math.round(weatherData.main.temp - 271.15)} <span>°C</span>
            </p>

            <p className='condition'>
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>
          <div className='date-container'>
            <p className='today-text'>Today</p>
            <p className='today-text period'>.</p>
            <p className='today-text'>{days[day]}</p>
          </div>
        </>
         :
         Object.keys(locData).length > 0  ? 
         <>
         <div className='name-container'>
           <div className='detail-about-city'>
 
             <p className='input-city-name'>
               {locData.name}
             </p>
 
             <p className='temperature'>
               {Math.round(locData.main.temp - 271.15)} <span>°C</span>
             </p>
 
             <p className='condition'>
               {locData.weather[0].description}
             </p>
           </div>
         </div>
           <div className='date-container'>
             <p className='today-text'>Today</p>
             <p className='today-text period'>.</p>
             <p className='today-text'>{days[day]}</p>
           </div>
         </>
         :
         <></>
      }

    </div>
  )
}

export default CityInput