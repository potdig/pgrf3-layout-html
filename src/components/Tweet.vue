<template>
  <transition :name="`slide-from-${from}`">
    <div id="tweet-wrapper" v-if="tweet">
      <div id="tweet" v-if="tweet">
        <div id="tweet-label" class="label">
          TWEET WITH <span>#PGRF2</span>:
        </div>
        <div class="box">
          <div id="twitter-user">
            <img id="twitter-icon" :src="tweet.icon" alt="icon" />
            <span id="twitter-id">@{{ tweet.id }}</span>
          </div>
          <div id="tweet-text" :class="{ small }">
            {{ tweet.content }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  width: {
    type: String,
    default: '420px'
  },
  small: {
    type: Boolean
  },
  from: {
    type: String,
    default: 'left'
  }
})

const store = useStore()
const tweet = computed(() => store.getters.tweet)
</script>

<style lang="scss" scoped>
#tweet-wrapper {
  overflow: hidden;
}

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
  padding: 8px 0 12px;
  border-bottom: 1px solid gray;
  font-size: 0.9em;
  font-weight: bold;
}

#twitter-icon {
  width: 56px;
  height: 56px;
  margin-right: 16px;
  background-color: white;
  border-radius: 28px;
}

#tweet-text {
  font-size: 0.9em;
  padding-top: 8px;

  &.small {
    font-size: 0.75em;
  }
}

$duration: 1s;

.slide-from-left-enter-active {
  border-left: 1px solid;
  animation: border $duration ease-out;

  #tweet {
    animation: slide-from-left $duration ease-out;
  }
}

.slide-from-left-leave-active {
  border-left: 1px solid;
  animation: border $duration ease-out;

  #tweet {
    animation: slide-from-left reverse $duration ease-in;
  }
}

.slide-from-right-enter-active {
  border-right: 1px solid;
  animation: border $duration ease-out;

  #tweet {
    animation: slide-from-right $duration ease-out;
  }
}

.slide-from-right-leave-active {
  border-right: 1px solid;
  animation: border $duration ease-out;

  #tweet {
    animation: slide-from-right reverse $duration ease-in;
  }
}

@keyframes slide-from-left {
  0%, 10% {
    transform: translateX(-100%);
  }
  90%, 100% {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  0%, 10% {
    transform: translateX(100%);
  }
  90%, 100% {
    transform: translateX(0);
  }
}

@keyframes border {
  0% {
    border-color: rgba($color: #CCCCCC, $alpha: 0);
  }
  10% {
    border-color: rgba($color: #CCCCCC, $alpha: 1);
  }
  90% {
    border-color: rgba($color: #CCCCCC, $alpha: 1);
  }
  100% {
    border-color: rgba($color: #CCCCCC, $alpha: 0);
  }
}
</style>
