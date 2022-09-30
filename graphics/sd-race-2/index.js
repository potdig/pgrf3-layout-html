import { createApp } from 'vue'
import SDRace2 from '../../src/SDRace2.vue'
import store from '../../src/store/index.js'

createApp(SDRace2).use(store).mount('#root')
