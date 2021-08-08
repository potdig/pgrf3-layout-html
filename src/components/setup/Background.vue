<template>
  <div id="wrapper">
    <div id="filter"></div>
    <div id="boxes">
      <BlinkBox v-for="i in [...Array(boxCount)].map((_, i) => i)" :key="i"></BlinkBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BlinkBox from './BlinkBox.vue'

const boxCount = ref(60)
</script>

<style scoped>
#wrapper {
  position: fixed;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}

#filter {
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, white 30%, rgba(0, 0, 0, 0));
}

#boxes {
  position: relative;
  z-index: -3;
  width: 2200px;
  display: flex;
  flex-wrap: wrap;
  transform: translate(-110px, 60px) rotate(-15deg);
  filter: blur(6px);
}

p {
  font-size: 5em;
  color: lightgray;
}
</style>
