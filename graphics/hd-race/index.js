import { createApp } from 'vue'
import HDRace from '../../src/HDRace.vue'
import store from '../../src/store/index.js'

createApp(HDRace).use(store).mount('#root')
