import { createStore } from 'vuex'
import games from './games.js'
import timer from './timer.js'
import tweet from './tweet.js'
import spotify from './spotify.js'

export default createStore({
  modules: { games, timer, tweet, spotify }
})