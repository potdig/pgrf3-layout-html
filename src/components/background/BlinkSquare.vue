<template>
  <Square
    class="animated"
    :style="{ animationDuration: `${duration}s` }"
  ></Square>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import Square from './Square.vue'

const props = defineProps({
  animated: Boolean
})
const duration = ref(Math.random() * (15 - 5) + 5)
</script>

<style lang="scss" scoped>
.animated {
  animation: 5s linear infinite fade-out;
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
