<template>
  <div>
    <BlinkBox></BlinkBox>
  </div>
</template>

<script setup>
import BlinkBox from './BlinkBox.vue'
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: -1;
}

p {
  font-size: 5em;
  color: lightgray;
}
</style>
