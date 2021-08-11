<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <div id="info">
    </div>
    <Video :width="1920 * 0.84" :height="1080 * 0.84"></Video>
  </main>
  <footer>
    <!-- TODO footer -->
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/game/Header.vue'
import Video from './components/game/Video.vue'
</script>

<style lang="scss">
@import '/src/assets/common.css';
@import "/src/assets/game.css";

header {
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
}
</style>
