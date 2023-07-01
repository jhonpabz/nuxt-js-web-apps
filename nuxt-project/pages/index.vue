<script setup>
import { ref } from "vue";
import { useCounter } from "@/store";

const num = ref(null);
</script>

<template>
  <!-- <ContentDoc /> -->

  <div class="bg-[#0F172A] h-screen text-white p-6">
    <span class="">State Management (Reactive)</span>
    <div class="py-4 text-3xl">
      {{ useCounter.count }}
    </div>
    <button @click="useCounter.increment()" class="btn btn-info mr-2">
      Increment
    </button>
    <button @click="useCounter.incrementBy10()" class="btn btn-info">
      Increment by 10
    </button>

    <div>
      <input
        type="number"
        ref="num"
        v-model="toAdd"
        placeholder="Add number"
        class="input w-full max-w-xs text-slate-900"
      />
      <button @click="useCounter.add(toAdd)" class="btn my-2 ml-1">Add</button>
    </div>
  </div>
</template>
