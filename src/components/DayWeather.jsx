import React, { useEffect, useState } from 'react'
import '../assets/Dayweather.css'
import CityInput from './CityInput'
import DetailInformation from './DetailInformation'
import ErrorComp from './ErrorComp';

const API_KEY = 'd136918b7413876eb34736bd8a116199';

const DayWeather = () => {
    const [searchedCity,setSearchedCity] = useState('');
    const [weatherData,setWeatherData] = useState({});

    const getWeatherData = async () => {
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}`);
        const data = await res.json();
        
        res.status === 200 ? setWeatherData(data) : setWeatherData('');
        console.log(data)
    }

  return (
    <div className='dayweather-wrapper'>
        <CityInput setSearchedCity={setSearchedCity} getWeatherData={getWeatherData} name={weatherData.name}/>
        {
        Object.keys(weatherData).length > 0 ? <DetailInformation weatherData={weatherData}/>
        :
        !weatherData? <ErrorComp />
        :
        <></>
        }
    </div>
  )
}

export default DayWeather