<template>
  <div class="box" :style="{ opacity }"></div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  opacity: {
    type: Number,
    default: 1
  }
})
</script>

<style lang="scss" scoped>
.box {
  margin: 8px;
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border-radius: 16px;
}

</style>