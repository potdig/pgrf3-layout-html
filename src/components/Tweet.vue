<template>
  <div id="tweet" :style="{ width }">
    <div id="tweet-label" class="label">
      TWEET WITH <span>#PGRF</span>:
    </div>
    <div class="box">
      <div id="twitter-user">
        <img id="twitter-icon" src="icon.png" alt="icon" />
        <span id="twitter-id">@wwwwwwwwwwwwww</span>
      </div>
      <div id="tweet-text">
        テストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイート
        #PGRF
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '420px'
  }
})
</script>

<style lang="scss" scoped>
#tweet {
  display: flex;
  flex-direction: column;
}

#tweet-label {
  font-size: 1.4em;

  span {
    text-decoration: underline dashed;
  }
}

#twitter-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid gray;
  font-size: 0.9em;
  font-weight: bold;
}

#twitter-icon {
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background-color: white;
  border-radius: 24px;
}

#tweet-text {
  font-size: 0.9em;
  padding-top: 8px;
}
</style>
