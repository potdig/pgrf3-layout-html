import { createApp } from 'vue'
import SDRace4 from '../../src/SDRace4.vue'
import store from '../../src/store/index.js'

createApp(SDRace4).use(store).mount('#root')
