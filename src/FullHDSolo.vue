<template>
  <Background></Background>
  <header>
    <Header></Header>
  </header>
  <main>
    <div id="sidebar">
      <Tweet></Tweet>
      <div id="infos">
        <Info></Info>
        <Info></Info>
        <Info></Info>
        <Info></Info>
      </div>
    </div>
    <Video :width="1920 * 0.84" :height="1080 * 0.84"></Video>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Background from './components/Background.vue'
import Header from './components/game/Header.vue'
import Tweet from './components/Tweet.vue'
import Info from './components/game/Info.vue'
import Video from './components/game/Video.vue'
import Footer from './components/game/Footer.vue'
</script>

<style lang="scss">
@import '/src/assets/common.css';
@import "/src/assets/game.css";

header {
  margin : 0 16px;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
}

main {
  margin : 0 16px;
  display: flex;
  flex-direction: row;
}

#sidebar {
  margin-right: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#infos {
  margin-top: auto;
}

footer {
  margin : 0 16px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  line-height: 1em;
}
</style>
