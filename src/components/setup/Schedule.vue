<template>
  <div id="schedule">
    <Run v-for="(run, index) in runs" :key="index" :upNext="index === 0"></Run>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Run from './Run.vue'

const store = useStore()
const runs = ref(store.getters.runsOnSchedule)
</script>

<style lang="scss" scoped>
#schedule {
  text-align: left;
}
</style>