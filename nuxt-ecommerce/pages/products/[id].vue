<script setup>
const route = useRoute();
const paramsId = route.params.id;
const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template>
  <div>Product id: {{ paramsId }}</div>
</template>
