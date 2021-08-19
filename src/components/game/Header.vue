<template>
  <img id="logo" src="/assets/pgrf/images/pgrf_logo_simple.png" />
  <div id="title">
    <p id="game-title">{{ title }}</p>
    <p id="category-platform">{{ category }} - {{ platform }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  category: String,
  platform: String
})
</script>

<style lang="scss" scoped>
#logo {
  height: 100%;
  margin-right: calc(1080px * 0.02);
}

header {
  margin-left: 24px;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
}

#title p {
  margin-top: -0.2em;
  margin-bottom: 0;
  line-height: 1.2em;
}

#game-title {
  font-size: 1.9em;
  font-weight: bolder;
}

#category-platform {
  font-size: 1.2em;
}
</style>
