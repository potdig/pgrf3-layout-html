<template>
  <Background animated></Background>
  <p class="main">Thank you for watching!</p>
  <p class="sub">See you again next PGRF!</p>
</template>

<script setup>
import Background from './components/Background.vue'
</script>

<style lang="scss">
@import '/src/stylesheets/common.css';
$headerHeight: 120px;
$footerHeight: 80px;

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  font-family: 'Staatliches', sans-serif;
  font-size: 4em;
  color: rgba($color: #000000, $alpha: 0.4);
}

.sub {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
  color: rgba($color: #000000, $alpha: 0.4);
}
</style>
