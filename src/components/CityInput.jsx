import React, { useEffect, useState } from 'react'
import '../assets/CityInput.css'

const CityInput = ({setSearchedCity,getWeatherData,name}) => {
    const [city,setCity] = useState('')

    useEffect(() => {
        setSearchedCity(city)
    },[city])

  return (
    <div className='input-wrapper'>
      <div className='input-box'>
        <input type='text' placeholder = 'Type Country' onChange={e => setCity(e.target.value)}/>
        <button onClick={getWeatherData}>Search</button>
      </div>

        <div className='name-container'>
          <p className='input-city-name'>
            {name}
          </p>
        </div>
    </div>
  )
}

export default CityInput