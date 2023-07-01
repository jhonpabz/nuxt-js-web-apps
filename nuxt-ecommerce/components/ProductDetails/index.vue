<template>
  <div class="p-7">
    <div>{{ product.title }}</div>
    <img :src="product.image" class="h-96 w-96" />
    <span>Price: ${{ product.price }}</span>
    <div>Product Description:</div>
    <p>{{ product.description }}</p>
    <button class="btn mt-2">
      <IconsCart />
      Add to cart
    </button>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
