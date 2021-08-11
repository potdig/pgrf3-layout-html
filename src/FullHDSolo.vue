<template>
  <header>
    <!-- TODO header -->
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
import Video from './components/game/Video.vue'
</script>

<style lang="scss">
@import '/src/assets/common.css';
@import "/src/assets/game.css";
</style>
