<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getWeather } from '../services/apiCall'
import { WeatherData } from '../models/WeatherModel.ts';
import WeatherForm from './WeatherForm.vue';
import WeatherDisplay from './WeatherDisplay.vue';


const weather = ref<WeatherData | null>(null);
const apiKey = import.meta.env.VITE_APP_API_KEY;

const fetchWeather = async (city: string) => {
  try {
    if (city.trim()) {
      weather.value = await getWeather(city, apiKey);
      console.log(weather.value);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

onMounted(() => {
  const defaultCity = 'Stockholm'; 
  fetchWeather(defaultCity);
});
</script>

<template>
  <div :class="'container'">
    <h1>Weather App</h1>
    <WeatherForm @fetch-weather="fetchWeather" />
    <hr>
    <WeatherDisplay :weather="weather"/>
  </div>
</template>

<style lang="scss" scoped>
@import "src/sass/main.scss";


</style>
