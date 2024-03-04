import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const base = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_KEY}`;


export const API = async (city) => {
    try {
        const response = await axios.get(`${base}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' //or 'Imperial' for Fahrenheit
            }
        });
        return response.data;
    } catch (error) {
        //Handle Error Here
        console.error('Error Fetching weather data:', error);
    }

    console.log(process.env.REACT_APP_OPENWEATHER_API_KEY)
};
