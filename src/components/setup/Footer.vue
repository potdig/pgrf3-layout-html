<template>
  <div id="spotify">
    <span>Now playing: {{ musicInfo }}</span>
  </div>
  <div id="date">Day {{ day }}: {{ date }}</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { DateTime } from 'luxon'

const dateTime = ref(DateTime.now())
const date = computed(() => dateTime.value.toFormat('yyyy/MM/dd'))
const day = computed(() => Math.ceil(dateTime.value.diff(DateTime.fromSQL('2022-10-29'), 'days').days))
const store = useStore()
const musicInfo = computed(() => store.getters.shortSpotifyInfo)
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

#date {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
}
</style>
