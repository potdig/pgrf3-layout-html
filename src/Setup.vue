<template>
  <Background></Background>
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
    <Footer></Footer>
  </footer>
</template>

<script setup>
import Background from './components/setup/Background.vue'
import Header from './components/setup/Header.vue'
import Footer from './components/setup/Footer.vue'
</script>

<style>
@import '/src/assets/common.css';

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 48px;
}
</style>
