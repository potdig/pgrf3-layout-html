<template>
  <div>
    <p class="value">{{ value }}</p>
    <p class="account">
      <transition name="switch">
        <span>{{ account }}</span>
      </transition>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  value: String,
  account: Object
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

.account {
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
  overflow: hidden;

  span {
    display: block;
  }
}

.switch-leave-active {
  animation: slide-out linear 0.5s;
}

.switch-enter-active {
  animation: slide-in linear 0.5s reverse;
}

@keyframes siide-in {
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
}

@keyframes slide-out {
  from { transform: translateY(0%); }
  to { transform: translateY(-100%); }
}
</style>
