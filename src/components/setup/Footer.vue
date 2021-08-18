<template>
  <div id="spotify">
    <span>Now playing: {{ music.title }} / {{ music.artist }}</span>
  </div>
  <div id="hashtag-guide">hashtag: <span>#PGRF2</span></div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const music = computed(() => store.state.spotify)
</script>

<style lang="scss" scoped>
$spotifyHeight: 48px;

#spotify {
  display: flex;
  align-items: center;
  height: $spotifyHeight;
  line-height: $spotifyHeight;
  padding: 0 24px;
  background-color: white;
  border-radius: 24px;
}

#hashtag-guide {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;

  span {
    text-decoration: underline dashed;
  }
}
</style>
