import { createApp } from 'vue'
import GBASolo from '../../src/GBASolo.vue'
import store from '../../src/store/index.js'

createApp(GBASolo).use(store).mount('#root')
