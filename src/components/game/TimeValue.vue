<template>
  <span class="value time" :class="statusClass">{{ value }}</span>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  value: String,
  status: String
})

const statusClass = computed(
  () => ({
    suspend: props.status === 'suspend',
    complete: props.status === 'complete'
  })
)
</script>

<style lang="scss" scoped>
.time {
  margin-top: auto;
  font-size: 2em;
  line-height: 1em;
  text-align: right;
}

.time.suspend {
  color: rgba(0, 0, 0, 50%);
}

.time.complete {
  color: rgb(0, 65, 255);
  animation: blink 1s 3 linear;
}

@keyframes blink {
  0%, 49.999%, 100% {
    opacity: 1;
  }

  50%, 99.999% {
    opacity: 0;
  }
}
</style>
