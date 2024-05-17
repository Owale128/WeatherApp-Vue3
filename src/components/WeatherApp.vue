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

</template>

<style lang="scss" scoped>

</style>
