<template>
  <div class="run" :class="{ 'later-than-next': !upNext }">
    <p id="up-next" class="label" v-if="upNext">UP NEXT:</p>
    <div class="time" v-else>{{ run.startsAtOnSchedule() }}~</div>
    <div
      class="content-box"
      :class="{ next: upNext, 'later-than-next': !upNext }"
      v-if="!run.isSetupBlock()"
    >
      <div class="title" ref="title"><span>{{ run.title }}</span></div>
      <div class="info">
        <div class="category">
          <span class="label">Category: </span>{{ run.category }}
        </div>
        <div class="platform">
          <span class="label">Platform: </span>{{ run.platform }}
        </div>
        <div class="est"><span class="label">EST: </span>{{ run.est }}</div>
      </div>
      <div class="info">
        <div class="runner">
          <span class="label">Runner: </span>{{ run.joinedRunnerNames() }}
        </div>
        <div class="commentator" v-if="run.commentators.length > 0">
          <span class="label">Commentator: </span>{{ run.joinedCommentatorNames() }}
        </div>
      </div>
    </div>
    <div
      class="content-box setup"
      :class="{ next: upNext, 'later-than-next': !upNext }"
      v-else
    >
      <span class="title">{{ run.title }}</span>
      <div class="info">
        <span class="label">Duration: </span><span class="time">{{ run.est }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
const props = defineProps({
  run: Object,
  upNext: Boolean
})
const title = ref(null)
const scaleTitle = () => {
  const scheduleWidth = 1440
  const timeWidth = 160
  const maxTitleWidth = props.upNext ? scheduleWidth : scheduleWidth - timeWidth 

  const titleTextElement = title.value.firstElementChild
  const titleWidth = titleTextElement.getBoundingClientRect()['width']

  if (titleWidth > maxTitleWidth) {
    titleTextElement.style.transform = `scale(${maxTitleWidth / titleWidth})`
  } else {
    titleTextElement.style.transform = ''
  }
}

onMounted(scaleTitle)
onUpdated(scaleTitle)

</script>

<style lang="scss" scoped>
$fullWidth: 1440px;
$timeWidth: 160px;

#up-next {
  font-size: 2em;
  margin-bottom: 12px;
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
  }

  &.later-than-next {
    font-size: 1.1em;
  }
}

.title {
  display: block;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: -0.2em;
  white-space: nowrap;
  overflow-wrap: none;

  span {
    display: block;
    width: fit-content;
    transform-origin: left;
  }
}

.info div {
  display: inline-block;
  margin-right: 1em;
}

.time {
  display: inline-block;
  font-size: 1.4em;
  width: $timeWidth;
}

.setup {
  color: rgba($color: black, $alpha: 0.4);

  .time {
    font-size: 1em;
  }
}
</style>
