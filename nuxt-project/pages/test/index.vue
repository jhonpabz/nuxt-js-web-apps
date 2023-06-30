<script setup>
const counter = useCounter();
const color = useColor();

const handleClick = () => {
  console.log(color.value);
  color.value = "#fff";
};
</script>

<template>
  <div>
    <div>Counter: {{ counter }}</div>
    <button class="btn btn-success" @click="counter++">+</button>
    <button class="btn btn-active" @click="counter--">-</button>
  </div>
  <div>
    <div class="text-[#040404]">Color: {{ color }}</div>
    <button class="btn btn-warning" @click="handleClick">Update Color</button>
  </div>
</template>
