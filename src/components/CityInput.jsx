import React, { useEffect, useRef, useState } from 'react'
import '../assets/CityInput.css'

const CityInput = ({setSearchedCity,getWeatherData,name}) => {
    const [city,setCity] = useState('')

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

        <div className='name-container'>
          <p className='input-city-name'>
            {name}
          </p>
        </div>
    </div>
  )
}

export default CityInput