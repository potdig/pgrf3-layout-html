<template>
  <Background></Background>
  <header>
    <Header></Header>
  </header>
  <main>
    <div id="runners">
      <div class="runner">
        <Video :width="1920 * 0.48" :height="1080 * 0.48"></Video>
        <InfoBox
          dense
          label="Runner I"
          value="RUNNER1"
          additionalValue="@runner_1"
        ></InfoBox>
      </div>
      <div class="runner">
        <Video :width="1920 * 0.48" :height="1080 * 0.48"></Video>
        <InfoBox
          dense
          label="Runner II"
          value="RUNNER2"
          additionalValue="@runner_2"
        ></InfoBox>
      </div>
    </div>
    <div id="infos">
      <InfoBox
        dense
        label="Commentator"
        value="COMMENTATOR1"
        additionalValue="@commentator_1"
      ></InfoBox>
      <InfoBox dense time label="EST">
        <TimeValue value="23:45"></TimeValue>
      </InfoBox>
      <InfoBox dense time label="Current Time">
        <TimeValue value="12:34" status="suspend"></TimeValue>
      </InfoBox>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Background from './components/Background.vue'
import Header from './components/game/Header.vue'
import Tweet from './components/Tweet.vue'
import InfoBox from './components/game/InfoBox.vue'
import TimeValue from './components/game/TimeValue.vue'
import Video from './components/game/Video.vue'
import Footer from './components/game/Footer.vue'
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

#infos {
  width: 40%;
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
