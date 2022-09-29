<template>
  <div class="triangle-container" :class="clazz" :style="style">
    <div class="triangle" :class="{animated}"></div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps({
  scale: {
    type: Number,
    default: 1.0
  },
  top: {
    type: Number,
    default: 0
  },
  from: {
    type: String,
    default: 'left'
  },
  animated: Boolean
})

const rand = (min, max) => Math.random() * (max - min) + min

const clazz = ref({
  'from-right': props.from === 'right',
  'from-left': props.from === 'left',
  'animated': props.animated
})
const style = ref({
  top: `${props.top}px`,
  transform: `scale(${props.scale}) rotate(${props.animated ? 0 : rand(0, 360)}deg)`,
  left: `${props.animated ? -150 : rand(-150, 2070)}px`,
  opacity: props.animated ? 1.0 : rand(0.1, 0.3)
})

</script>

<style scoped lang="scss">
$width: 173.2px;
/* (2√3)*h/3 */
$height: 150px;

/* √3/2*w */
.triangle-container {
  position: absolute;

  &.from-right.animated {
    animation: move-from-right-and-fade cubic-bezier(0.32, 0, 0.67, 0) forwards 10s;
  }

  &.from-left.animated {
    animation: move-from-left-and-fade cubic-bezier(0.32, 0, 0.67, 0) forwards 10s;
  }
}

.triangle {
  width: $width;
  height: $height;
  background: rgba($color: gray, $alpha: 1.0);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform-origin: calc(#{$width} / 2) calc(#{$height} / 3 * 2);

  &.animated {
    animation: rotate linear forwards 10s;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0.5;
  }

  100% {
    transform: rotate(3600deg);
    opacity: 0;
  }
}

@keyframes move-from-left-and-fade {
  0% {
    left: 0 - 150px;
  }

  100% {
    left: 960px - 75px;
  }
}

@keyframes move-from-right-and-fade {
  0% {
    left: 1920px + 150px;
  }

  100% {
    left: 960px - 75px;
  }
}
</style>