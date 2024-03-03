import axios from 'axios'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const base = 'https://api.openweathermap.org/data/2.5/';

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
};
