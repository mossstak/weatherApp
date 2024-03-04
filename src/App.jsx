import './App.css'
import { useState } from 'react'
import { API } from './Services/API'
import WeatherInput from './Components/WeatherInput'
import { WeatherButton } from './Components/WeatherButton'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const data = await API(city)
      setWeather(data)
      console.log(data)
    } catch (error) {
      setError('Error fetching data')
    }
    setLoading(false)
  }

  return (
    <div className="h-screen w-screen grid grid-cols-1 place-self-center content-center bg-gray-200">
      <div className="flex justify-center ">
        <h1 className="text-[34pt] md:text-[48pt] m-3 font-bold">Weather App</h1>
      </div>
      <div className="flex items-center justify-center gap-3">
        <WeatherInput input={city} onChange={(e) => setCity(e.target.value)} />
        <WeatherButton onClick={handleSearch} name={'Get Weather'} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && weather.weather[0].icon && (
        <div className=" flex items-center justify-center">
          <div className=" h-[500px] w-[300px] p-3 m-3 outline rounded-xl bg-gray-400">
            <h1 className="text-[36pt] text-center">{weather.name}</h1>
            <span className="flex flex-col items-center">
              <div className="flex flex-col">
                <p className="text-[16pt] font-bold">Temperature</p>
                <p className="text-[18pt] text-center">
                  {parseFloat(weather.main.temp).toFixed(0)}
                  {'\u00b0'}C
                </p>
              </div>
              <img
                className="w-[100px]"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <div>{weather.weather[0].main}</div>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
