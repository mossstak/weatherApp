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
    setLoading(true)
    setError(null)
    try {
      const data = await API(city)
      setWeather(data)
    } catch (error) {
      setError('Error fetching data')
    }
    setLoading(false)
  }

  return (
    <div className="h-screen w-screen grid grid-cols-1 place-self-center content-center bg-gray-200">
      <WeatherInput input={city} onChange={(e) => setCity(e.target.value)} />
      <WeatherButton onClick={handleSearch}>Get Weather</WeatherButton>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <div>{/* Display weather data here */}</div>}
    </div>
  )
}

export default App
