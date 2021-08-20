<template>
  <Background></Background>
  <header>
    <Header></Header>
  </header>
  <main>
    <div id="runners">
      <div class="runner">
        <Video :width="1920 * 0.48" :height="1080 * 0.48"></Video>
        <InfoBox dense label="Runner I">
          <TextValue
            :value="runners[0].name"
            :account="runners[0].currentAccount()"
          ></TextValue>
        </InfoBox>
      </div>
      <div class="runner">
        <Video :width="1920 * 0.48" :height="1080 * 0.48"></Video>
        <InfoBox dense label="Runner II">
          <TextValue
            :value="runners[1].name"
            :account="runners[1].currentAccount()"
          ></TextValue>
        </InfoBox>
      </div>
    </div>
    <div id="others">
      <div id="infos">
        <InfoBox v-for="( commentator, index ) in commentators" :key="index" dense label="Commentator">
          <TextValue :value="commentator.name" :account="commentator.currentAccount()"></TextValue>
        </InfoBox>
        <div id="times">
          <InfoBox dense time label="EST">
            <TimeValue :value="est"></TimeValue>
          </InfoBox>
          <InfoBox dense time label="Current Time">
            <TimeValue :value="timer.time" :status="timer.status"></TimeValue>
          </InfoBox>
        </div>
      </div>
      <Tweet width="40%"></Tweet>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Background from './components/Background.vue'
import Header from './components/game/Header.vue'
import InfoBox from './components/game/InfoBox.vue'
import TextValue from './components/game/TextValue.vue'
import TimeValue from './components/game/TimeValue.vue'
import Video from './components/game/Video.vue'
import Tweet from './components/Tweet.vue'
import Footer from './components/game/Footer.vue'

const store = useStore()
const est = computed(() => store.getters.currentEst)
const timer = computed(() => store.state.timer)
const runners = computed(() => store.state.runs.currentRunners)
const commentators = computed(() => store.state.runs.currentCommentators)

onMounted(() => {
  setInterval(() => {
    store.commit('rotateAccounts')
  }, 10000)
})
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
  flex-grow: 1;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#runners {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.runner {
  display: flex;
  flex-direction: column;
}

#others {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

#infos {
  width: 40%;

  #times {
    display: flex;
    gap: 12px;
  }
}

footer {
  height: 2em;
  margin: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  line-height: 1em;
}
</style>
