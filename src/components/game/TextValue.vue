<template>
  <div>
    <p class="value">{{ value }}</p>
    <p class="additional-value">{{ additionalValue }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  value: String,
  additionalValue: String
})
</script>

<style lang="scss" scoped>
.value {
  font-size: 1.15em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
  margin-top: auto;
}

.additional-value {
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
}
</style>
