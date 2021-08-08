<template>
  <div class="box"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box {
  animation: 5s infinite fade-out ;
  margin: 8px;
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border-radius: 16px;
}

@keyframes fade-out {
  from {
    opacity: 100%;
  }

  to {
    opacity: 0%;
  }
}
</style>