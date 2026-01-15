<template>
   <Card v-for="i in items" :key="i.id" :item="i" />
</template>

<script setup>
import { apiGetData } from './utils/api';
import Card from './components/Card.vue';
import { onMounted, ref } from 'vue';


const items = ref(undefined);


onMounted( async () => {
  items.value = await apiGetData('http://localhost:3000/api/data');
});

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
