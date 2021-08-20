<template>
  <div class="info-box">
    <span class="label" :class="{ dense }">{{ label }}</span>
    <div class="value-area">
      <slot>
        <TextValue :value="value" :account="account"></TextValue>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import TextValue from './TextValue.vue'

const props = defineProps({
  label: String,
  value: String,
  account: Object,
  dense: Boolean,
  time: Boolean
})
</script>

<style lang="scss" scoped>
.info-box {
  width: 100%;
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

  &.dense {
    position: absolute;
  }
}

.value-area {
  width: 100%;
  text-align: right;
}
</style>
