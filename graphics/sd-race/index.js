import { createApp } from 'vue'
import SDRace from '../../src/SDRace.vue'
import store from '../../src/store/index.js'

createApp(SDRace).use(store).mount('#root')
