<template>
  <div class="value-area">
    <div class="split time">{{ split }}</div>
    <TextValue :value="value" :additionalValue="additionalValue"></TextValue>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import TextValue from './TextValue.vue'

const props = defineProps({
  split: String,
  value: String,
  additionalValue: String
})
</script>

<style lang="scss" scoped>
.value-area {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.split {
  color: rgb(0, 65, 255);
  font-size: 1.4em;
  line-height: 1em;
  margin-right: 0.5em;
}
</style>
