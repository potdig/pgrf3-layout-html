import { createStore } from 'vuex'
import runs from './runs.js'
import timer from './timer.js'
import tweet from './tweet.js'
import spotify from './spotify.js'

export default createStore({
  modules: { runs, timer, tweet, spotify }
})