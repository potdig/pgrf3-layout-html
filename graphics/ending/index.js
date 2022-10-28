import { createApp } from 'vue'
import Ending from '../../src/Ending.vue'
import store from '../../src/store/index.js'

createApp(Ending).use(store).mount('#root')
