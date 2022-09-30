<template>
  <img id="logo" :class="{ dense }" src="/assets/pgrf/images/pgrf2_logo_simple.png" />
  <div id="title" :class="{ dense }">
    <p id="game-title" :class="{ dense }">{{ info.title }}</p>
    <p id="category-platform">{{ info.category }} - {{ info.platform }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  dense: Boolean
})
const store = useStore()
const info = computed(() => store.getters.headerInfo)
</script>

<style lang="scss" scoped>
#logo {
  height: 100%;
  margin-right: calc(1080px * 0.02);

  &.dense {
    height: 60%;
  }
}

#title {
  &.dense {
    display: flex;
    align-items: center;
  }

  p {
    margin-top: -0.2em;
    margin-bottom: 0;
    line-height: 1.2em;
  }
}

#game-title {
  font-size: 1.9em;
  font-weight: bolder;

  &.dense {
    font-size: 1.6em;
    margin-right: 1em;
  }
}

#category-platform {
  font-size: 1.2em;
}
</style>
