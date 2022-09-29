<template>
  <div id="wrapper">
    <div id="filter"></div>
    <div id="shapes">
      <Triangle v-for="(prop, index) in triangleProps" :key="prop.key" :scale="prop.scale" :top="prop.top"
        :from="prop.from"></Triangle>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import Triangle from './background/Triangle.vue';

const props = defineProps({
  animated: Boolean
})

const triangleProps = ref([])

const rand = (min, max) => Math.random() * (max - min) + min
const addTriangle = () => {
  triangleProps.value.push({
    scale: rand(0.2, 0.8),
    top: rand(-100, 1180),
    from: rand(0, 1) > 0.5 ? 'left' : 'right',
    key: new Date().getTime()
  })
  setTimeout(() => triangleProps.value.shift(), 10000)
}

onMounted(() => {
  setInterval(addTriangle, 200)
})
</script>

<style scoped>
#wrapper {
  position: fixed;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}

#filter {
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
}

#shapes {
  position: relative;
  z-index: -3;
  width: 2200px;
  display: flex;
  flex-wrap: wrap;
  transform: translate(-110px, 60px);
  filter: blur(6px);
}
</style>
