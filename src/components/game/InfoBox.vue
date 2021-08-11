<template>
  <div class="info-box">
    <span class="label">{{ label }}</span>
    <slot>
      <span class="value" :class="{ time }">{{ value }}</span>
      <span class="additional-value">{{ additionalValue }}</span>
    </slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
  value: String,
  additionalValue: String,
  time: Boolean
})
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid gray;
  padding-bottom: 2px;
  margin-top: 8px;
}

.label {
  font-size: 1.2em;
  line-height: 1em;
  color: rgba(0, 0, 0, 70%);
}

.value {
  font-size: 1.15em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
  margin-top: auto;

  &.time {
    font-size: 2em;
    line-height: 1em;
  }
}

.additional-value {
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
}

.time.suspend {
  color: rgba(0, 0, 0, 50%);
}

.time.complete {
  color: rgb(0, 65, 255);
}
</style>
