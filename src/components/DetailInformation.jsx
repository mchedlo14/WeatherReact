import React from 'react'
import '../assets/Detailinformation.css'

const DetailInformation = ({weatherData}) => {
  return (
    <>
    {
      Object.keys(weatherData).length < 0 ? 
      <div className='information-container'>
        <h3>Please Type Country and see Results</h3>
      </div>
      :
      <div className='information-container'>
          <div className='detail-first-box'>
            <p className='highlights-text'>Today's Highlights</p>
            <div className='highlights-first-div'>
              <div className='wind-box'>
                <h3 className='wind-title'>Wind status</h3>
                <p className='wind-text'>{weatherData.wind.speed} mph</p>
              </div>

              <div className='wind-box'>
                <h3 className='wind-title'>Humidity</h3>
                <p className='wind-text'>{weatherData.main.humidity}%</p>
                <input type='range' min="0" max={100} value={weatherData.main.humidity} className='range-input'/>
              </div>

            </div>

            <div className='highlights-second-div'>
              <div className='wind-box2'>
                <h3 className='wind-title'>Visibility</h3>
                <p className='wind-text'>{(weatherData.visibility / 1000).toFixed(1)} miles</p>
              </div>

              <div className='wind-box2'>
                <h3 className='wind-title'>Air Pressure</h3>
                <p className='wind-text'>{weatherData.main.pressure} mb</p>
              </div>
            </div>
          </div>
      </div>
  }
    </>
  )
}

export default DetailInformation