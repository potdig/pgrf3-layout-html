<template>
  <div id="wrapper">
    <div id="boxes">
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
      <BlinkBox></BlinkBox>
    </div>
  </div>
</template>

<script setup>
import BlinkBox from './BlinkBox.vue'
</script>

<style lang="scss" scoped>
#wrapper {
  position: absolute;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}

#boxes {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}

p {
  font-size: 5em;
  color: lightgray;
}
</style>
