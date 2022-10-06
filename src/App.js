import React, { useEffect, useState } from 'react'
import DayWeather from './components/DayWeather.jsx'
import { ClipLoader } from 'react-spinners'
import './app.css'
const App = () => {
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

  return (
    <div className='app'>
      {
        loading ? <ClipLoader color='#100E1D' size={40}/>
        :
        <DayWeather />
      }

    </div>
  )
}

export default App