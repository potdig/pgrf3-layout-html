import { createApp } from 'vue'
import FullHDRace from '../../src/FullHDRace.vue'
import store from '../../src/store/index.js'

createApp(FullHDRace).use(store).mount('#root')
