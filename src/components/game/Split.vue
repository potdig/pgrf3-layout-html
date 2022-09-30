<template>
  <p class="split time" :class="{ small }">{{ split }}</p>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
const props = defineProps({
  id: Number,
  small: Boolean
})

const store = useStore()
const split = computed(() => store.getters.splitOfId(props.id))
</script>

<style lang="scss" scoped>
$height: 1em;

.split {
  height: $height;
  line-height: $height;
  color: rgb(0, 65, 255);
  font-size: 1.4em;
  margin-top: 4px;
  text-align: right;
  
  &.small {
    font-size: 1.2em;
  }
}
</style>