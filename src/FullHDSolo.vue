<template>
  <Background></Background>
  <header>
    <Header
      :title="run.title"
      :category="run.category"
      :platform="run.platform"
    ></Header>
  </header>
  <main>
    <div id="sidebar">
      <Tweet></Tweet>
      <div id="infos">
        <InfoBox
          v-for="runner in run.runners"
          :key="runner.id"
          label="Runner"
          :value="runner.name"
          additionalValue="@runner_1"
        ></InfoBox>
        <InfoBox
          v-for="( commentator, index ) in run.commentators"
          :key="index"
          label="Commentator"
          :value="commentator.name"
          additionalValue="@commentator_1"
        ></InfoBox>
        <InfoBox time label="EST">
          <TimeValue :value="run.est"></TimeValue>
        </InfoBox>
        <InfoBox time label="Current Time">
          <TimeValue :value="timer.time" :status="timer.status"></TimeValue>
        </InfoBox>
      </div>
    </div>
    <Video :width="1920 * 0.84" :height="1080 * 0.84"></Video>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Background from './components/Background.vue'
import Header from './components/game/Header.vue'
import Tweet from './components/Tweet.vue'
import InfoBox from './components/game/InfoBox.vue'
import TimeValue from './components/game/TimeValue.vue'
import Video from './components/game/Video.vue'
import Footer from './components/game/Footer.vue'

const store = useStore()
const run = computed(() => store.getters.currentRun)
const timer = computed(() => store.state.timer)
</script>

<style lang="scss">
@import '/src/assets/common.css';
@import '/src/assets/game.css';

header {
  margin: 0 16px;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
}

main {
  margin: 0 16px;
  display: flex;
  flex-direction: row;
}

#sidebar {
  margin-right: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

#infos {
  margin-top: auto;
}

footer {
  margin: 0 16px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  line-height: 1em;
}
</style>
