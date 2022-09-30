<template>
  <div id="hashtag-guide">Hashtag: <span class="hashtag">#PGRF3</span></div>
  <div id="next-title" v-if="info">
    <span class="label">Next Title: </span>{{ info.title }} | {{ info.category }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const info = computed(() => store.getters.footerInfo)
</script>

<style lang="scss" scoped>
div {
  color: rgba($color: black, $alpha: 0.7);
}
#hashtag-guide {
  font-size: 1.2em;
  font-family: 'Staatliches', sans-serif;

  span {
    text-decoration: underline dashed;
  }
}
</style>
