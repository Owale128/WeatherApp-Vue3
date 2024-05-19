<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const city = ref('');
const emit = defineEmits(['fetchWeather']);

const onSubmit = () => {
    if(city.value.trim() !== '') {
        emit('fetchWeather', city.value)
        city.value = '';
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="onSubmit">
        <input type="text" v-model="city" placeholder="Ange stad" />
        <button>Visa väder</button>
        </form>  
    </div>
</template>

<style scoped>
    
</style>