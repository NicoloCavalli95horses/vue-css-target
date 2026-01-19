<template>
  <div class="card" :style="item.style">
    <h1>{{item.title}}</h1>
    <h3>{{item.description }}</h3>
  </div>
</template>

<script setup>

defineProps({
  item: Object,
})

</script>

<style scoped>
.card {
  width: 150px;
  height: 150px;
  border: 4px solid #777;
  margin: 10px;
  border-radius: 8px;
}
</style>
