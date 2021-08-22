import { createApp } from 'vue'
import SDSolo from '../../src/SDSolo.vue'
import store from '../../src/store/index.js'

createApp(SDSolo).use(store).mount('#root')
