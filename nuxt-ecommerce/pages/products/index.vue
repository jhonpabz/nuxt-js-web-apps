<script setup>
// definePageMeta({
//   layouts: "products",
// });

// const { data: products } = await useFetch("https://fakestoreapi.com/products");
const { data: products, status } = await useProducts();

console.log("status: ", status.value);
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
        <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
