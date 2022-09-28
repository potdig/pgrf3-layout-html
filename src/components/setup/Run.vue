<template>
  <div class="run" :class="{ 'later-than-next': !upNext }">
    <p id="up-next" class="label" v-if="upNext">UP NEXT</p>
    <p class="time" v-else>{{ run.startsAtOnSchedule() }}~</p>
    <div
      class="content-box"
      :class="{ next: upNext, 'later-than-next': !upNext }"
      v-if="!run.isSetupBlock()"
    >
      <div class="title" ref="title">{{ run.title }}</div>
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

  const titleTextElement = title.value
  const titleWidth = titleTextElement.getBoundingClientRect()['width']

  if (titleWidth > maxTitleWidth) {
    titleTextElement.style.transform = `scale(${maxTitleWidth / titleWidth})`
    const scaledWidth = titleTextElement.getBoundingClientRect()['width']
    titleTextElement.parentNode.style.width = `${scaledWidth}px`
  } else {
    titleTextElement.style.transform = ''
    titleTextElement.parentNode.style.width = ''
  }
}

onMounted(scaleTitle)
onUpdated(scaleTitle)

</script>

<style lang="scss" scoped>
#up-next {
  font-size: 2em;
  margin-bottom: 6px;
  text-decoration: underline;
}

.run {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.content-box {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;

  &.next {
    font-size: 1.4em;
  }

  &.later-than-next {
    font-size: 1.1em;
  }
}

.title {
  display: block;
  width: fit-content;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: -0.2em;
  white-space: nowrap;
}

.info div {
  display: inline-block;
  text-align: center;
  margin-right: 1em;
}

.time {
  display: inline-block;
  font-size: 1.4em;
}

.setup {
  color: rgba($color: black, $alpha: 0.4);

  .time {
    font-size: 1em;
  }
}
</style>
