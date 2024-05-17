import axios from 'axios';
import { WeatherData } from '../models/WeatherModel.ts';

export const getWeather = async (city: string, apiKey: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Couldn\'t get data:', error);
    throw error;
  }
};


