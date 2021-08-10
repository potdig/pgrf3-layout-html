<template>
  <div class="run" :class="{ 'later-than-next': !upNext }">
    <p id="up-next" class="label" v-if="upNext">UP NEXT:</p>
    <div class="time" v-else>12:34~</div>
    <div
      class="content-box"
      :class="{ next: upNext, 'later-than-next': !upNext }"
    >
      <span class="title">タイトル</span>
      <div class="info">
        <div class="category">
          <span class="label">Category: </span>Category%
        </div>
        <div class="platform">
          <span class="label">Platform: </span>PLATFORM
        </div>
        <div class="est"><span class="label">EST: </span>H:MM:SS</div>
      </div>
      <div class="info">
        <div class="runner">
          <span class="label">Runner: </span>RUNNER1 / RUNNER2
        </div>
        <div class="commentator">
          <span class="label">Commentator: </span>COMMENTATOR1 / COMMENTATOR2
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  upNext: Boolean
})
</script>

<style lang="scss" scoped>
#up-next {
  font-size: 2em;
}

.run {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.later-than-next {
    flex-direction: row;
    align-items: center;
  }
}

.content-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.next {
    font-size: 1.4em;
    height: 200px;
  }

  &.later-than-next {
    font-size: 1.1em;
    height: 160px;
  }
}

.title {
  display: block;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: -0.2em;
}

.info div {
  display: inline-block;
  margin-right: 1em;
}

.time {
  display: inline-block;
  font-size: 1.4em;
  width: 160px;
}
</style>
