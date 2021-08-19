<template>
  <div>
    <p class="value">{{ value }}</p>
    <p class="account">
      <transition name="switch">
        <span v-if="account.twitch">{{ account.twitch }}</span>
        <span v-else-if="account.twitter">{{ account.twitter }}</span>
        <span v-else-if="account.youtube">{{ account.youtube }}</span>
        <span v-else>-</span>
      </transition>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  value: String,
  account: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>
$accountHeight: 1.2em;
$sinWave: cubic-bezier(0.37, 0, 0.63, 1);

div {
  width: 100%;
  text-align: right;
}

.value {
  font-size: 1.15em;
  line-height: 1.2em;
  font-weight: bold;
  margin-top: auto;
}

.account {
  font-size: 0.8em;
  height: $accountHeight;
  line-height: $accountHeight;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;

  span {
    text-align: right;
    display: block;
    position: absolute;
  }
}

.switch-leave-active {
  animation: slide-out $sinWave 0.5s;
}

.switch-enter-active {
  animation: slide-in $sinWave 0.5s;
}

@keyframes slide-in {
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
}

@keyframes slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
}
</style>
