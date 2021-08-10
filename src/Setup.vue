<template>
  <background></background>
  <div id="setup">
    <span>This is foreground</span>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
    <p>This is foreground</p>
  </div>
</template>

<script setup>
import Background from './components/setup/Background.vue'
</script>

<style>
body {
  margin: 0;
}

#setup {
  width: 1920px;
  height: 1080px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
