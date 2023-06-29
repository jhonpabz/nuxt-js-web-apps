<template>
  <div>
    <h1>Baby Name Generator</h1>
    <p>Choose your baby name you want in the options below.</p>

    <div class="options-container">
      <div class="option-container">
        <h4>1.) Choose a gender</h4>
        <div class="option-buttons">
          <button>Boy</button>
          <button>Girl</button>
          <button>Unisex</button>
        </div>
      </div>
      <div class="option-container">
        <h4>2.) Choose the name popularity</h4>
        <div class="option-buttons">
          <button>Trendy</button>
          <button>Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4>3.) Choose the name length</h4>
        <div class="option-buttons">
          <button>Long</button>
          <button>Short</button>
          <button>All</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.options-container {
  font-family: Arial, Helvetica, sans-serif;
  color: #363636;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

.option-container {
  background-color: #98d7b9;
  border-radius: 10px;
  padding: 1rem;
  width: 95%;
}
</style>
