<template>
  <div id="tweet" :style="{ width }">
    <div id="tweet-label" class="label">
      TWEET WITH <span>#PGRF2</span>:
    </div>
    <div class="box">
      <div id="twitter-user">
        <img id="twitter-icon" :src="tweet.icon" alt="icon" />
        <span id="twitter-id">@{{ tweet.id }}</span>
      </div>
      <div id="tweet-text">
        {{ tweet.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, defineProps } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '420px'
  }
})

const store = useStore()
const tweet = computed(() => store.state.tweet)
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
