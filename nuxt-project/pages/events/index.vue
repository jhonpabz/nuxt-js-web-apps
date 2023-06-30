<script setup>
const { $hello } = useNuxtApp();
const foo = useFoo();
foo;
console.log("$hello: ", $hello("JhonPabz"));
</script>

<template>
  <div class="bg-slate-900 h-screen text-white p-6">Events Page</div>
  <img src="@/assets/zxc.jpg" alt="Discover Nuxt 3" />
</template>

<style></style>
