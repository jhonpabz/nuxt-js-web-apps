<script setup>
import { useCounter } from "@/store";
</script>

<template>
  <div class="bg-[#0F172A] h-screen text-white p-6">
    <div class="pb-4 text-3xl">
      {{ useCounter.count }}
    </div>
    <button @click="useCounter.count++" class="btn">Increment</button>
  </div>
</template>
