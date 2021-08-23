import { createApp } from 'vue'
import GBSolo from '../../src/GBSolo.vue'
import store from '../../src/store/index.js'

createApp(GBSolo).use(store).mount('#root')
