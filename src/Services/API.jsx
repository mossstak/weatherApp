import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseURL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`${baseURL}weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' //or 'Imperial' for Fahrenheit
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error Fetching weather data:', error.response);
    }
};
