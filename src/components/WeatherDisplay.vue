<script setup lang="ts">
import { defineProps } from 'vue/dist/vue.js';
import { WeatherData } from '../models/WeatherModel';

defineProps<{
    weather: WeatherData | null;
}>()
</script>

<template>
     <div :class="'weatherContainer'">
      <div v-if="weather" :class="'weather'">
        <h2>{{ weather.name }}</h2>
        <p>{{ Math.round(weather.main.temp) }}°C</p>
        <p>{{ weather.weather[0].description }}</p>
      </div>
    </div>
</template>

<style>
    
</style>