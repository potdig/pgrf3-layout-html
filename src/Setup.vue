<template>
  <Background></Background>
  <div id="setup">
    <header>
      <Header></Header>
    </header>
    <main>
      <!-- TODO: schedule -->
      <!-- TODO: tweet -->
      <span>This is foreground</span>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
      <p>This is foreground</p>
    </main>
    <footer>
      <!-- TODO: footer -->
    </footer>
  </div>
</template>

<script setup>
import Background from './components/setup/Background.vue'
import Header from './components/setup/Header.vue'
</script>

<style>
@import '/src/assets/common.css';

#setup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  padding: 0 48px;
}
</style>
