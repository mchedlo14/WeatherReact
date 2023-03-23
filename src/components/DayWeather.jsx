import React, { useEffect, useState } from 'react'
import '../assets/Dayweather.css'
import CityInput from './CityInput'
import DetailInformation from './DetailInformation'
import ErrorComp from './ErrorComp';
import GeoApi from './GeoApi';

const API_KEY = 'd136918b7413876eb34736bd8a116199';

const DayWeather = () => {
    const [searchedCity,setSearchedCity] = useState('');
    const [weatherData,setWeatherData] = useState({});
    const [locData,setLocData] = useState({});
    const [status,setStatus] = useState(0)

    const getWeatherData = async () => {
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}`);
        const data = await res.json();
        
        res.status === 200 ? setWeatherData(data) : setWeatherData('');
        setStatus(res.status)
    }


  return (
    <div className='dayweather-wrapper'>
        {Object.keys(locData).length > 0 ? <CityInput weatherData={weatherData} status={status} setSearchedCity={setSearchedCity} getWeatherData={getWeatherData} name={weatherData.name} locData={locData}/> : ''}
        {
        Object.keys(weatherData).length > 0 ? <DetailInformation weatherData={weatherData} locData={locData}/>
        :
        !weatherData? <ErrorComp />
        :
        <GeoApi setLocData={setLocData}/>
        }
    </div>
  )
}

export default DayWeather