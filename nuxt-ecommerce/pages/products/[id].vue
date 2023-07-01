<script setup>
const { id } = useRoute().params;
const { data: product, pending } = await useProduct(id);
console.log(pending.value, "pending");
</script>

<template>
  <div>Product id for: {{ id }}</div>
  <div>Title: {{ product.title }}</div>
  <div>Price: {{ product.price }}</div>
  <div>Price: {{ pending }}</div>
</template>
