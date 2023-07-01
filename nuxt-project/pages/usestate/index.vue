<script setup>
const counter = useCounter();
</script>

<template>
  <div class="bg-slate-900 h-screen text-white p-6">
    <div>{{ counter }}</div>
    <button @click="counter++" class="btn btn-info mr-2">Increment</button>
  </div>
</template>

<style></style>
