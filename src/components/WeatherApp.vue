<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getWeather } from '../services/apiCall'
import { WeatherData } from '../models/WeatherModel.ts';

const city = ref('');
const weather = ref<WeatherData | null>(null);
const apiKey = import.meta.env.VITE_APP_API_KEY;

const fetchWeather = async () => {
  try {
    if (city.value) {
      weather.value = await getWeather(city.value, apiKey);
      console.log(weather.value);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

onMounted(() => {
  fetchWeather();
});
</script>

<template>
  <div :class="'container'">
    <h1>Weather App</h1>
    <form @submit.prevent="fetchWeather">
      <input type="text" v-model="city" placeholder="Ange stad" />
      <button>Visa väder</button>
    </form>
    <hr>
    <div :class="'weatherContainer'">
      <div v-if="weather" :class="'weather'">
        <h2>{{ weather.name }}</h2>
        <p>{{ weather.main.temp }}°C</p>
        <p>{{ weather.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/sass/main.scss";


</style>
