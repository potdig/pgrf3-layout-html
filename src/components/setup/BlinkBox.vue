<template>
  <div class="box" :style="{ animationDuration: `${duration}s` }"></div>
</template>

<script setup>
import { ref } from "vue"

const duration = ref(Math.random() * (15 - 5) + 5)
</script>

<style lang="scss" scoped>
.box {
  animation: 5s linear infinite fade-out;
  margin: 8px;
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border-radius: 16px;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>