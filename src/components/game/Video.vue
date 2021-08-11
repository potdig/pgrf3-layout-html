<template>
  <div :style="{ width: `${width}px`, height: `${height}px` }"></div>
</template>

<script setup>
const props = defineProps({
  width: Number,
  height: Number
})
</script>

<style lang="scss" scoped>
div {
  background-color: rgba($color: black, $alpha: 0.2);
}
</style>