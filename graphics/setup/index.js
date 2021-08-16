import { createApp } from 'vue'
import { createStore } from 'vuex'
import Setup from '../../src/Setup.vue'
import games from '../../src/store/games.js'

const store = createStore({
  modules: { games }
})

createApp(Setup).use(store).mount('#root')
