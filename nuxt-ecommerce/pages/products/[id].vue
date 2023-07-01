<script setup>
const { id } = useRoute().params;
const { data: product, pending } = await useProduct(id);
console.log(pending.value, "pending");
</script>

<template>
  <ProductDetails :product="product" />
</template>
