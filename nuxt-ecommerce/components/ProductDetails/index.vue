<template>
  <div>{{ product.title }}</div>
  <img :src="product.image" class="h-96 w-96" />
  <span>Price: ${{ product.price }}</span>
  <div>
    <div>Product Description:</div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
