<script setup>
const { id } = useRoute().params;
const { data: product, pending } = await useProduct(id);
console.log(pending.value, "pending");
</script>

<template>
  <Head>
    <Title>JHONSHOPPE | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <ProductDetails :product="product" />
</template>
