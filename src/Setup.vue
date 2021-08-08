<template>
  <div id="#app">
    <background></background>
  </div>
</template>

<script setup>
import Background from './components/setup/Background.vue'
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 1920px;
  height: 1080px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
