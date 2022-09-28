<template>
  <Background animated></Background>
  <header>
    <Header></Header>
  </header>
  <main>
    <Schedule></Schedule>
    <Tweet style="width: 960px"></Tweet>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
import Background from './components/Background.vue'
import Header from './components/setup/Header.vue'
import Footer from './components/setup/Footer.vue'
import Schedule from './components/setup/Schedule.vue'
import Tweet from './components/Tweet.vue'
</script>

<style>
@import '/src/stylesheets/common.css';

#root {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  padding: 0 48px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  padding: 0 64px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 48px;
  margin-top: auto;
}
</style>
